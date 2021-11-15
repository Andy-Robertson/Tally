const PORT = process.env.PORT || 4001;
const express = require("express");
const cors = require("cors");

const bugData = require("./bugData.json");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Tally's server");
});

app.get("/tally/bugs", (req, res) => {
  res.status(200).json(bugData);
});

app.listen(PORT, () => {
  console.log(`Tally server started on localhost port ${PORT}`);
});