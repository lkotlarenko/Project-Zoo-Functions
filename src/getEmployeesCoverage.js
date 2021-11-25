const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

// funcao pegar o employee atraves de nome || sobrenome || id
const getEmploy = (emp) => {
  // se o name estiver como parametro, retorna employee correto via nome ou sobrenome;
  if (emp.name) return employees.find((e) => e.firstName === emp.name || e.lastName === emp.name);
  // se o id estiver como parametro retorna o employee com o mesmo id
  if (emp.id) return employees.find((e) => emp.id === e.id);
};

function getEmployeesCoverage(emp) {
  // caso o parametro nao esteja presente retorne todos os employees
  
  // verifica se a pessoa passada no parametro esta em employees
  if (!getEmploy(emp)) throw new Error('Informações inválidas');
}
module.exports = getEmployeesCoverage;
