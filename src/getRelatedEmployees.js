const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some((emp) => emp.managers.some((mgr) => mgr === id));

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
