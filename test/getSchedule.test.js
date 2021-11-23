const getSchedule = require('../src/getSchedule');

describe('8 - Crie o agendamento que disponibilize as informações de horário dos animais com o dia que os animais estão disponíveis', () => {
  it('sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis', () => {
    const actual = getSchedule();

    const expected = {
      'Tuesday': {
        'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
      },
      'Wednesday': {
        'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
      },
      'Thursday': {
        'officeHour': 'Open from 10am until 8pm',
        'exhibition': [ 'lions', 'otters', 'frogs', 'snakes', 'giraffes' ],
      },
      'Friday': {
        'officeHour': 'Open from 10am until 8pm',
        'exhibition': [ 'tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes' ],
      },
      'Saturday': {
        'officeHour': 'Open from 8am until 10pm',
        'exhibition': [
          'lions',  'tigers',
          'bears',  'penguins',
          'otters', 'frogs',
          'snakes', 'elephants',
        ],
      },
      'Sunday': {
        'officeHour': 'Open from 8am until 8pm',
        'exhibition': [ 'lions', 'bears', 'penguins', 'snakes', 'elephants' ],
      },
      'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
    };

    expect(actual).toEqual(expected);
  });
  
  it('caso os parâmetros não seja um animal e dia, retorna um objeto com os horários do dia e os animais em exibição', () => {
    const actual = getSchedule('qualquercoisa');

    const expected = {
      'Tuesday': {
        'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
      },
      'Wednesday': {
        'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
      },
      'Thursday': {
        'officeHour': 'Open from 10am until 8pm',
        'exhibition': [ 'lions', 'otters', 'frogs', 'snakes', 'giraffes' ],
      },
      'Friday': {
        'officeHour': 'Open from 10am until 8pm',
        'exhibition': [ 'tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes' ],
      },
      'Saturday': {
        'officeHour': 'Open from 8am until 10pm',
        'exhibition': [
          'lions',  'tigers',
          'bears',  'penguins',
          'otters', 'frogs',
          'snakes', 'elephants',
        ],
      },
      'Sunday': {
        'officeHour': 'Open from 8am until 8pm',
        'exhibition': [ 'lions', 'bears', 'penguins', 'snakes', 'elephants' ],
      },
      'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
    };
  
    expect(actual).toEqual(expected);
  });

  it('se "Monday" for passado por parâmetro, deverá informar que o zoológico está fechado', () => {
    const actual = getSchedule('Monday');

    const expected = {
      'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
    };

    expect(actual).toEqual(expected);
  });

  it('se um dia for passado, retorna somente o horário daquele expediente e os animais em exibição no dia', () => {
  {
    const actual = getSchedule('Tuesday');

    const expected = {
      'Tuesday': {
        'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
      },
    };

    expect(actual).toEqual(expected);
  }

  {
    const actual = getSchedule('Wednesday');

    const expected = {
      'Wednesday': {
        'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
      },
    };
    
    expect(actual).toEqual(expected);
  }

  });

  it('se for passado um animal, deverá retornar um array com os dias em que ele está em exibição', () => {
    {
      const actual = getSchedule('lions');
      const expected = [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];
      expect(actual).toEqual(expected);
    }

    {
      const actual = getSchedule('penguins');
      const expected = [ 'Tuesday', 'Wednesday', 'Sunday', 'Saturday' ];
      expect(actual).toEqual(expected);
    }
  });
});
