exports.up = function (knex) {
  return knex.schema.table("ingredients", (table) => {
    table.integer("quantity").notNullable().defaultTo("0");
  });
};

exports.down = function (knex) {
  return knex.schema.table.dropColumn("ingredients");
};
