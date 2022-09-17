// import express from 'express';
const express = require("express");
// by default 
// const bodyParser = require("body-parser");


const app = express();
// app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.sendFile("index.html", { root: __dirname });
});

app.get("/index2", (req, res) => {
  // res.send("Hello World!");
  res.sendFile("index2.html", { root: __dirname });
});

app.get("/user", (req, res) =>
  res.json([
    { id: 1, name: "Ammar" },
    { id: 2, name: "Hady" },
    { id: 3, name: "Nour" },
  ])
);

app.post("/user", (req, res) => {
  console.log(req.body);
  res.json({ message: "User added successfuly" });
});

app.listen(3000, () => console.log("Server Listening on port 3000!"));
