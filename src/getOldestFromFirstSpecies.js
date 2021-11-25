const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // guarda o id do primeiro animal abaixo da pessoa com o id parametro
  const ani = employees.find((emp) => emp.id === id).responsibleFor[0];
  // guarda as variaveis da seguinte maneira: encontra o animal usando o 'find' no id guardado anteriormente,
  // ordena por idade do mais velho com 'sort' (salva apenas o primeiro animal, mais velho)
  const { name, sex, age } = species
    .find((spe) => spe.id === ani).residents.sort((b, c) => c.age - b.age)[0];
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
