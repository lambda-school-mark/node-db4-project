exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .del()
    .then(function () {
      return knex("recipe_ingredients").insert([
        { recipe_id: "3", ingredients_id: "8", quantity: "2" },
        { recipe_id: "3", ingredients_id: "9", quantity: "4" },
        { recipe_id: "3", ingredients_id: "10", quantity: "5" },
      ]);
    });
};
