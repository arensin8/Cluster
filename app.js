const express = require("express");
const app = express();
const cluster = require("cluster");

app.get("/", (req, res, next) => {
  let sum = 0;
  for (let index = 0; index < 1e9; index++) {
    sum += index;
  }
  cluster.worker.kill();
  res.send(`The end request on process ID[${process.pid}]`);
});

app.listen(3400, () => {
    console.log("server ready on http://localhost:3400");
  });