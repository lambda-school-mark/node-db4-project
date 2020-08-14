exports.up = function (knex) {
  return knex.schema.table("instructions", (table) => {
    table
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};
exports.down = function (knex) {
  return knex.schema.table("instructions", (table) => {
    table.dropColumn("recipe_id");
  });
};
