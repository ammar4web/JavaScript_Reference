const express = require("express");
// import express from 'express';

const app = express();
app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.sendFile("index.html", { root: __dirname });
});

app.listen(3000, () => console.log("Server Listening on port 3000!"));
