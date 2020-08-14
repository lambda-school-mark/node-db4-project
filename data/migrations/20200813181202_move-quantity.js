exports.up = function (knex) {
  return knex.schema
    .table("ingredients", (table) => {
      table.dropColumn("quantity");
    })
    .table("recipe_ingredients", (table) => {
      table.integer("quantity", 0).notNullable().defaultTo("0");
    });
};

exports.down = function (knex) {
  return knex.schema
    .table("recipe_instructions", (table) => {
      table.dropColumn("quantity");
    })
    .table("ingredients", (table) => {
      table.integer("quantity", 0).notNullable().defaultTo("0");
    });
};
