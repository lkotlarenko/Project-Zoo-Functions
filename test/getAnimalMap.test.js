const getAnimalMap = require('../src/getAnimalMap');

describe('7 - Crie um mapeamento geográfico das espécies e seus animais', () => {
  it('sem parâmetros, retorna animais categorizados por localização', () => {
    const actual = getAnimalMap();

    const expected = {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes'],
    };

    expect(actual).toEqual(expected);
  });

  it('se somente a opção `sex: female` for especificada, retorna animais categorizados por localização', () => {
    const expected = {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes'],
    };

    const options = { sex: 'female' };
    const actual = getAnimalMap(options);

    expect(actual).toEqual(expected);
  });

  it('se somente as opções `sex: female` e `sorted: true` forem especificadas, retorna animais categorizados por localização', () => {
    const expected = {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes'],
    };

    const options = { sex: 'female', sorted: true };
    const actual = getAnimalMap(options);

    expect(actual).toEqual(expected);
  });

  it('com a opção `includeNames: true` especificada, retorna nomes de animais', () => {
    const options = { includeNames: true };
    const actual = getAnimalMap(options);

    const expected = {
      NE: [
        { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
        { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: ['Hiram', 'Edwardo', 'Milan'] },
        { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] },
      ],
      SE: [
        { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
        { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] },
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette', 'Bill'] },
      ],
    };

    expect(actual).toEqual(expected);
  });

  it('com a opção `sorted: true` especificada, retorna nomes de animais ordenados', () => {
    const options = { includeNames: true, sorted: true };
    const actual = getAnimalMap(options);

    const expected = {
      NE: [
        { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
        { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] },
      ],
      NW: [
        { tigers: ['Esther', 'Shu'] },
        { bears: ['Edwardo', 'Hiram', 'Milan'] },
        { elephants: ['Bea', 'Ilana', 'Jefferson', 'Orval'] },
      ],
      SE: [
        { penguins: ['Joe', 'Keri', 'Nicholas', 'Tad'] },
        { otters: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] },
      ],
      SW: [
        { frogs: ['Annice', 'Cathey'] }, { snakes: ['Bill', 'Paulette'] },
      ],
    };

    expect(actual).toEqual(expected);
  });

  it('com a opção `sex: \'female\'` ou `sex: \'male\'` especificada, retorna somente nomes de animais macho/fêmea', () => {
    const options = { includeNames: true, sex: 'female' };
    const actual = getAnimalMap(options);

    const expected = {
      NE: [
        { lions: ['Zena', 'Dee'] },
        { giraffes: ['Gracia', 'Vicky'] },
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: [] },
        { elephants: ['Ilana', 'Bea'] },
      ],
      SE: [
        { penguins: ['Keri'] },
        { otters: ['Mercedes', 'Margherita'] },
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette'] },
      ],
    };

    expect(actual).toEqual(expected);
  });

  it('com a opção `sex: \'female\'` ou `sex: \'male\'` especificada e a opção `sort: true` especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados', () => {
    const options = { includeNames: true, sex: 'female', sorted: true };
    const actual = getAnimalMap(options);
    
    const expected = {
      NE: [
        { lions: ['Dee', 'Zena'] },
        { giraffes: ['Gracia', 'Vicky'] },
      ],
      NW: [
        { tigers: ['Esther', 'Shu'] },
        { bears: [] },
        { elephants: ['Bea', 'Ilana'] },
      ],
      SE: [
        { penguins: ['Keri'] },
        { otters: ['Margherita', 'Mercedes'] },
      ],
      SW: [
        { frogs: ['Annice', 'Cathey'] },
        { snakes: ['Paulette'] },
      ],
    };

    expect(actual).toEqual(expected);
  });
});
