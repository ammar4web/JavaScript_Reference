const express = require("express");
// import express from 'express';

const app = express();
app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.sendFile("index.html", { root: __dirname });
});

app.get("/user", (req, res) =>
  res.json([
    { id: 1, name: "Ammar" },
    { id: 2, name: "Hady" },
    { id: 3, name: "Nour" },
  ])
);

app.listen(3000, () => console.log("Server Listening on port 3000!"));
