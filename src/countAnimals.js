const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // se não tiver parametro retorna um objeto com chaves (nome da especie: numero de animais da mesma)
  if (!animal) {
    return species.reduce((i, spe) => Object.assign(i, { [spe.name]: spe.residents.length }), {});
  }

  // pega a lista de residentes da especie passada no parametro usando 'find'
  const resList = species.find((spe) => spe.name === animal.specie).residents;

  // retorna o numero de residentes totais da especie caso o parametro sex nao esteja presente
  if (!animal.sex) return resList.length;

  // retorna o numero de residentes filtrando(com o parametro sexo) a lista criada anteriormente com o 'filter'
  return resList.filter((res) => res.sex === animal.sex).length;
}

module.exports = countAnimals;
