const PORT = process.env.PORT || 4001;
const express = require("express");
const cors = require("cors");

const bugs = require("./bugData.json");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Tally's server");
});

app.get("/bugs", (req, res) => {
  res.status(200).json(bugs);
});

app.get("/bugs/:program", (req, res) => {
  res.status(200).json(bugs[req.params.program]);
});

app.listen(PORT, () => {
  console.log(`Tally server started on localhost port ${PORT}`);
});
