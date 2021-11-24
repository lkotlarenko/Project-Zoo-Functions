const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const e = employeeName;
  return employees.find((name) => name.firstName === e || name.lastName === e);
}

module.exports = getEmployeeByName;
