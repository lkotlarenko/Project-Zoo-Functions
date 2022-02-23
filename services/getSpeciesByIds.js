const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// lint contra uma linha ;-;
// const getSpeciesByIds = (...ids) => ids.map((id) => data.species.find((specie) => specie.id.includes(id)));

// vai o outro metodo ent :P
function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
