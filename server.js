const express = require("express");
const path = require("path");
const app = express();


app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

const port = 2999;
app.listen(port, () => console.log(`Server is running on port ${port}`));
