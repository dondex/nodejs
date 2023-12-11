const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/mainRoute"));

// Set up Bootstrap
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist"))
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
