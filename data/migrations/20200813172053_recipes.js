exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (table) => {
      table.increments("id");

      table.string("name", 255).notNullable();

      table
        .integer("instructions_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("instructions")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", (table) => {
      table.increments("id");

      table.string("name", 255).notNullable();
    })
    .createTable("recipe_ingredients", (table) => {
      table.increments("id");

      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      table
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("instructions", (table) => {
      table.increments("id").unique();

      table.string("steps", 255).notNullable();
    });
};

exports.down = function (knex) {};
