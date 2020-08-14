exports.up = function (knex) {
  return knex.schema.table("recipes", (table) => {
    table.dropColumn("instructions_id");
  });
};

exports.down = function (knex) {};
