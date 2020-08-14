exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      return knex("recipes").insert([
        { name: "borscht", instructions_id: "1" },
        { name: "pizza", instructions_id: "2" },
        { name: "shashlik", instructions_id: "3" },
      ]);
    });
};
