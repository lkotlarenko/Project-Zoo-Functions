const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // usando 'filter' para guardar numero visitantes de diferentes idades
  const senior = entrants.filter((ent) => ent.age >= 50).length;
  const adult = entrants.filter((ent) => ent.age >= 18 && ent.age < 50).length;
  const child = entrants.filter((ent) => ent.age < 18).length;

  // retorna um objeto com chaves contendo o numero de visitantes por idade
  return { child, adult, senior };
}

function calculateEntry(ent) {
  // retorna 0 caso o parametro 'entrants' não seja passado ou seja um objeto vazio;
  if (!ent || ent.length === undefined) return 0;

  // retorna utilizando a funcao 'countEntrants' acima para calcular as entradas com base nas idades;
  return countEntrants(ent).senior * 24.99
    + countEntrants(ent).adult * 49.99 + countEntrants(ent).child * 20.99;
}

module.exports = { calculateEntry, countEntrants };
