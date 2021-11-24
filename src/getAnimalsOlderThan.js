const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// versão uma linha que o lint é contra ;-;
// const getAnimalsOlderThan = (animal, age) => species.find((specie) => specie.name === animal).residents.every((yOld) => yOld.age >= age);

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal)
    .residents.every((yOld) => yOld.age >= age);
}

module.exports = getAnimalsOlderThan;
