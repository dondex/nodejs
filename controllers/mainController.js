const con = require("../connection/connection");

exports.getIndex = (req, res) => {
  const sql = "SELECT * FROM blogs";
  con.query(sql, (err, results) => {
    if (err) {
      res.send(err.message);
      return;
    }
    results.sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
    res.render('index', { title: "index", results });
  });
};

exports.createBlog = (req, res) => {
  res.render("createBlog");
};

exports.addBlog = (req, res) => {
  let title = req.body.title;
  let subtitle = req.body.subtitle;
  let content = req.body.content;
  let alert = "";
  const sql = "INSERT INTO blogs (title, subtitle, content) VALUES (?,?,?)";
  con.query(sql, [title, subtitle, content], (err, results) => {
    if (err) {
      // res.send(err.message);
      alert = err.message;
    } else {
      alert = "Blog Created";
    }
    results = {
      title:  title,
      content: content
    }
    res.redirect("/");
  });
};

exports.viewBlog = (req, res) => {
  let id = req.params.id;
  // let blogId = req.params.id;
  // let id = blogId?.id;

  const sql = "SELECT * FROM blogs WHERE id=(?)";
  con.query(sql, [id], (err, results) => {
    if (err) {
      res.send(err.message);
      return;
    }
    res.render('viewBlog', { title: "viewBlog", results });
  });
};

exports.updateBlog = (req, res) => {
  let id = req.body.id;
  let title = req.body.title;
  let subtitle = req.body.subtitle;
  let content = req.body.content;

  const sql = "UPDATE blogs SET title = ?, subtitle = ?,  content = ? WHERE id=?";
  con.query(sql, [title, subtitle, content, id], (err, results) => {
    if (err) {
      console.log(err.message);
      return;
    }
  
    res.redirect("/");
  });
};


exports.editBlog = (req, res) => {
  let id = req.body.id;
  let title = req.body.title;
  let subtitle = req.body.subtitle;
  let content = req.body.content;

  const results = [{
      id: id, 
      title: title, 
      subtitle: subtitle, 
      content: content,  
  }];
  console.log(results);

  res.render("editBlog", {results: results});
};

exports.deleteBlog = (req, res) => {
  let id = req.body.id;

  const sql = "Delete FROM blogs WHERE id=?";
  con.query(sql, [id], (err, results) => {
    if (err) {
      console.log(err.message);
      return;
    }

    res.redirect("/");
  });
  // res.json(req.params);
};