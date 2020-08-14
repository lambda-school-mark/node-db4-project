const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes");
}
function getShoppingList(recipe_id) {
  return db("ingredients")
    .where({ recipe_id })
    .join(
      "recipe_ingredients",
      "ingredients.id",
      "=",
      "recipe_ingredients.ingredients_id"
    );
}
function getInstructions(recipe_id) {
  return db("instructions")
    .where({ recipe_id })
    .join("recipes", "instructions.recipe_id", "=", "recipes.id");
}
