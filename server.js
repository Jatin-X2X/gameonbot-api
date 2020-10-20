const app = require("express")();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Welcome To the Api of GameOnBot");
});

//const { notFound } = require('./util')
const { shop } = require("./shop.json");

const { commands } = require("./commands.json");

app.get("/shop", (req, res) => {
  res.json(shop);
});

app.get("/commandlist", (req, res) => {
  res.send("NOT READY YET");
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
