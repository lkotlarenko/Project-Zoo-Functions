const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

// cria a resposta esperada recebendo como parametro um objeto employee
const result = (emp) => ({
  id: emp.id,
  fullName: `${emp.firstName} ${emp.lastName}`,
  // obtem as especies e locais na ordem > filtra as especies que estao presentes no responsibleFor
  // do employee parametro > usa 'map' para devolver as chaves de acordo com nome/ localidade
  species: species.filter((spe) => emp.responsibleFor.includes(spe.id)).map((ani) => ani.name),
  locations: species.filter((spe) => emp.responsibleFor.includes(spe.id)).map((a) => a.location),
});

// funcao que devolve o obj employee atraves um parametro nome || sobrenome || id
const getEmployee = (emp) => {
  // se o name estiver como parametro, retorna employee correto via nome ou sobrenome;
  if (emp.name) return employees.find((e) => e.firstName === emp.name || e.lastName === emp.name);
  // se o id estiver como parametro retorna o employee com o mesmo id
  if (emp.id) return employees.find((e) => emp.id === e.id);
};

function getEmployeesCoverage(emp) {
  // caso o parametro nao esteja presente retorna todos os employees
  // usando 'map' para passar a func 'result' acima em todos funcionarios
  if (!emp) return employees.map((employee) => result(employee));
  // verifica se a pessoa passada no parametro esta em employees
  if (!getEmployee(emp)) throw new Error('Informações inválidas');
  // devolve o resultado esperado recebendo nome || sobrenome || id
  return result(getEmployee(emp));
}
module.exports = getEmployeesCoverage;
