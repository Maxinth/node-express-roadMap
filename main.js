"use strict";

const express = require("express"),
  app = express();
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");

// to set the port using the app.set() method
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
//
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(layouts);

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.get("/items/:vegetable", homeController.sendReqParams);
app.get("/name/:myName", homeController.respondWithName);
app.listen(app.get("port"), () => {
  console.log(`Server running at  http://localhost:${app.get("port")}`);
});
