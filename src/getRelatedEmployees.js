const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

// essa ta bem complexa então vou deixar documentado pra relembrar dps
// checa no array employees se o id parametro esta presente em alguma chave 'managers' usando 'some'
const isManager = (id) => employees.some((emp) => emp.managers.some((mgr) => mgr === id));

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // filtra employees com pessoas que possuem o id parametro (do gerente) na chave managers para um novo array
  const relatedList = employees.filter((emp) => emp.managers.find((mgr) => mgr === managerId));
  // transforma a lista em um array com os nomes e retorna ele
  return relatedList.map((emp) => `${emp.firstName} ${emp.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
