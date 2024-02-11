const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const portLive = process.env.port;
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var items= [];
var workItems= [];

app.get("/", (req, res) => {
  
  let day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items });
});

app.get("/work", (req, res) => {
  res.render("list", {listTitle: "Work List", newListItems: workItems });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/", (req, res) => {

  var item = req.body.newItem;

  if(req.body.list === "Work"){
    console.log(req.body);
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
});

app.post("/work", (req, res) => {
  var item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(port | portLive, () => {
  if(!(portLive == 0)){
    console.log("Now running at port "+ port);
  } else {
    console.log("Now running at port "+ portLive);}
});