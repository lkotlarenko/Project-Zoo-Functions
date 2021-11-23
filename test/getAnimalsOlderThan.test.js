const getAnimalsOlderThan = require('../src/getAnimalsOlderThan');

describe('2 - Crie uma função que verifica se todos os animais de uma espécie possuem a idade mínima especificada', () => {
  it('ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada', () => {
    {
      const actual = getAnimalsOlderThan('otters', 7);
      const expected = true;
      expect(actual).toEqual(expected);
    }

    {
      const actual = getAnimalsOlderThan('penguins', 10);
      const expected = false;
      expect(actual).toEqual(expected);
    }
  });
});
