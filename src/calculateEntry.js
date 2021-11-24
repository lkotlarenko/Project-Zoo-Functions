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
  // retorna 0 caso o parametro 'entrants' não seja passado ou seja um objeto vazio;
  if (!entrants || entrants.length === undefined) return 0;

  // utiliza a funcao acima para calcular as entradas com base nas idades;
  const senior = countEntrants(entrants).senior * 24.99;
  const adult = countEntrants(entrants).adult * 49.99;
  const child = countEntrants(entrants).child * 20.99;

  // devolve o total das entradas;
  return senior + adult + child;
}

module.exports = { calculateEntry, countEntrants };
