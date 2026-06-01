const express = require("express");

const app = express();

app.get("/quote", (req, res) => {
  res.json({
    message: "Disciplina vence motivação."
  });
});

module.exports = app;