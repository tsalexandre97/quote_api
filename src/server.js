const express = require("express");

const app = express();

app.get("/quote", (req, res) => {
  res.json({
    message: "Disciplina vence motivação."
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

module.exports = app;