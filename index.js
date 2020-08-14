const express = require("express");

const server = express();

const Recipe = require("./api/data-model");

server.get("/api/recipes", (req, res) => {
  Recipe.getRecipes().then((recipes) => {
    res.status(200).json(recipes);
  });
});

server.get("/api/recipes/:id/shoppingList", (req, res) => {
  Recipe.getShoppingList(req.params.id).then((ingredients) => {
    res.status(200).json(ingredients);
  });
});
server.get("/api/recipes/:id/instructions", (req, res) => {
  Recipe.getInstructions(req.params.id).then((instructions) => {
    res.status(200).json(instructions);
  });
});

server.listen(5000, () => {
  console.log("running on port 5000");
});
