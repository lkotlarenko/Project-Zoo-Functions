const { isManager, getRelatedEmployees } = require('../src/getRelatedEmployees');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];


describe('4 - Crie a gestão dos funcionários de acordo com o respectivo gerente', () => {
  it('retorna true se o id passado é de um gerente', () => {
    const expected = true;
    
    managers.forEach((managerId) => {
      const actual = isManager(managerId);
      expect(actual).toBe(expected);
    });
  });

  it('retorna false se o id passado não é de um gerente', () => {
    const actual = isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
    const expected = false;
    expect(actual).toBe(expected);
  });


  it('retorna uma array com o nome dos funcionários do respectivo gerente passado pelo id', () => {
    const actual = getRelatedEmployees(stephanieId);
    const expected = [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];
    expect(actual).toEqual(expected);
  });

  it('dispara erro com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!", quando o id inserido não for de uma pessoa colaboradora genrente', () => {
    const actual = '4b40a139-d4dc-4f09-822d-ec25e819a5ad';
    expect(() => getRelatedEmployees(actual)).toThrow(/^O id inserido não é de uma pessoa colaboradora gerente!$/);
  });
});
