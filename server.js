const express = require("express");
const path = require("path");
const app = express();
const api = require(`./server/routes/api`)
const bodyParser = require(`body-parser`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, `dist`)))
app.use(express.static(path.join(__dirname, `node_modules`)))
app.use(`/`, api)

const port = 2999;
app.listen(port, () => console.log(`Server is running on port ${port}`));
