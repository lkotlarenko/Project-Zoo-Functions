const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // se não tiver parametro retorna um objeto com chaves (nome da especie: numero de animais da mesma)
  if (!animal) {
    return species.reduce((i, spe) => Object.assign(i, { [spe.name]: spe.residents.length }), {});
  }
}

console.log(countAnimals());
module.exports = countAnimals;
