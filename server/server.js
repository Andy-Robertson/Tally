const PORT = process.env.PORT || 5000;
const express = require("express");
const cors = require("cors");
const path = require("path");

require("./Data/pGConfig");
const bugs = require("./bugData.json");

const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/api/", (req, res) => {
  res.status(200).send("Welcome to Tally's server");
});

app.get("/api/bugs", (req, res) => {
  res.status(200).json(bugs);
});

app.get("/api/bugs/:program", (req, res) => {
  res.status(200).json(bugs[req.params.program]);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Tally server started on localhost port ${PORT}`);
});
