const getOldestFromFirstSpecies = require('../src/getOldestFromFirstSpecies');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

const employees = [
  'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
  burlId,
  olaId,
  '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
  stephanieId,
  '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
  'c1f50212-35a6-4ecd-8223-f835538526c2',
  'b0dc644a-5335-489b-8a2c-4e086c7819a2',
];

describe('9 - Crie uma função que busca o animal mais velho da primeira espécie gerenciada', () => {
  it('passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie', () => {
    const expected = [
      ['Maxwell', 'male', 15],
      ['Maxwell', 'male', 15],
      ['Margherita', 'female', 10],
      ['Bill', 'male', 6],
      ['Margherita', 'female', 10],
      ['Margherita', 'female', 10],
      ['Shu', 'female', 19],
      ['Maxwell', 'male', 15],
    ];

    employees.forEach((employeeId, index) => {
      const actual = getOldestFromFirstSpecies(employeeId);
      expect(actual).toEqual(expected[index]);
    });
  });
});
