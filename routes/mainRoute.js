
const router = require("express").Router();
const mainCon = require("../controllers/mainController");

router.get("/", mainCon.getIndex);

router.post("/createBlog", mainCon.createBlog);

router.post("/addBlog", mainCon.addBlog);

router.get("/viewBlog/:id", mainCon.viewBlog);

router.post("/editBlog", mainCon.editBlog);

router.post("/updateBlog", mainCon.updateBlog);

router.post("/deleteBlog", mainCon.deleteBlog);

module.exports = router;
