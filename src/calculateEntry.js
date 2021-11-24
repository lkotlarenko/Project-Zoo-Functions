const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // usando 'filter' para guardar numero visitantes de diferentes idades
  const senior = entrants.filter((ent) => ent.age >= 50).length;
  const adult = entrants.filter((ent) => ent.age >= 18 && ent.age < 50).length;
  const child = entrants.filter((ent) => ent.age < 18).length;
  // retorna um objeto com chaves contendo o numero de visitantes por idade
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
