const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const ottersId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
const snakesId = '78460a91-f4da-4dea-a469-86fd2b8ccc84';
const frogsId = '89be95b3-47e4-4c5b-b687-1fabf2afa274';
const bearsId = 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d';
const tigersId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

module.exports = {
  species: [
    {
      id: lionId,
      name: 'lions',
      popularity: 4,
      location: 'NE',
      availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
      residents: [
        {
          name: 'Zena',
          sex: 'female',
          age: 12,
        },
        {
          name: 'Maxwell',
          sex: 'male',
          age: 15,
        },
        {
          name: 'Faustino',
          sex: 'male',
          age: 7,
        },
        {
          name: 'Dee',
          sex: 'female',
          age: 14,
        },
      ],
    },
    {
      id: tigersId,
      name: 'tigers',
      popularity: 5,
      location: 'NW',
      availability: ['Wednesday', 'Friday', 'Saturday', 'Tuesday'],
      residents: [
        {
          name: 'Shu',
          sex: 'female',
          age: 19,
        },
        {
          name: 'Esther',
          sex: 'female',
          age: 17,
        },
      ],
    },
    {
      id: bearsId,
      name: 'bears',
      popularity: 5,
      location: 'NW',
      availability: ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'],
      residents: [
        {
          name: 'Hiram',
          sex: 'male',
          age: 4,
        },
        {
          name: 'Edwardo',
          sex: 'male',
          age: 4,
        },
        {
          name: 'Milan',
          sex: 'male',
          age: 4,
        },
      ],
    },
    {
      id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
      name: 'penguins',
      popularity: 4,
      location: 'SE',
      availability: ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'],
      residents: [
        {
          name: 'Joe',
          sex: 'male',
          age: 10,
        },
        {
          name: 'Tad',
          sex: 'male',
          age: 12,
        },
        {
          name: 'Keri',
          sex: 'female',
          age: 2,
        },
        {
          name: 'Nicholas',
          sex: 'male',
          age: 2,
        },
      ],
    },
    {
      id: ottersId,
      name: 'otters',
      popularity: 4,
      location: 'SE',
      availability: ['Friday', 'Thursday', 'Wednesday', 'Saturday'],
      residents: [
        {
          name: 'Neville',
          sex: 'male',
          age: 9,
        },
        {
          name: 'Lloyd',
          sex: 'male',
          age: 8,
        },
        {
          name: 'Mercedes',
          sex: 'female',
          age: 9,
        },
        {
          name: 'Margherita',
          sex: 'female',
          age: 10,
        },
      ],
    },
    {
      id: frogsId,
      name: 'frogs',
      popularity: 2,
      location: 'SW',
      availability: ['Saturday', 'Friday', 'Thursday', 'Wednesday'],
      residents: [
        {
          name: 'Cathey',
          sex: 'female',
          age: 3,
        },
        {
          name: 'Annice',
          sex: 'female',
          age: 2,
        },
      ],
    },
    {
      id: snakesId,
      name: 'snakes',
      popularity: 3,
      location: 'SW',
      availability: ['Sunday', 'Saturday', 'Friday', 'Thursday'],
      residents: [
        {
          name: 'Paulette',
          sex: 'female',
          age: 5,
        },
        {
          name: 'Bill',
          sex: 'male',
          age: 6,
        },
      ],
    },
    {
      id: elephantsId,
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
      residents: [
        {
          name: 'Ilana',
          sex: 'female',
          age: 11,
        },
        {
          name: 'Orval',
          sex: 'male',
          age: 15,
        },
        {
          name: 'Bea',
          sex: 'female',
          age: 12,
        },
        {
          name: 'Jefferson',
          sex: 'male',
          age: 4,
        },
      ],
    },
    {
      id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
      name: 'giraffes',
      popularity: 4,
      location: 'NE',
      availability: ['Wednesday', 'Thursday', 'Tuesday', 'Friday'],
      residents: [
        {
          name: 'Gracia',
          sex: 'female',
          age: 11,
        },
        {
          name: 'Antone',
          sex: 'male',
          age: 9,
        },
        {
          name: 'Vicky',
          sex: 'female',
          age: 12,
        },
        {
          name: 'Clay',
          sex: 'male',
          age: 4,
        },
        {
          name: 'Arron',
          sex: 'male',
          age: 7,
        },
        {
          name: 'Bernard',
          sex: 'male',
          age: 6,
        },
      ],
    },
  ],
  employees: [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      firstName: 'Nigel',
      lastName: 'Nelson',
      managers: [burlId, olaId],
      responsibleFor: [lionId, tigersId],
    },
    {
      id: burlId,
      firstName: 'Burl',
      lastName: 'Bethea',
      managers: [stephanieId],
      responsibleFor: [
        lionId,
        tigersId,
        bearsId,
        'ef3778eb-2844-4c7c-b66c-f432073e1c6b'],
    },
    {
      id: olaId,
      firstName: 'Ola',
      lastName: 'Orloff',
      managers: [stephanieId],
      responsibleFor: [
        ottersId,
        frogsId,
        snakesId,
        elephantsId,
      ],
    },
    {
      id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
      firstName: 'Wilburn',
      lastName: 'Wishart',
      managers: [burlId, olaId],
      responsibleFor: [snakesId, elephantsId],
    },
    {
      id: stephanieId,
      firstName: 'Stephanie',
      lastName: 'Strauss',
      managers: [],
      responsibleFor: [
        ottersId,
        '01422318-ca2d-46b8-b66c-3e9e188244ed',
      ],
    },
    {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      firstName: 'Sharonda',
      lastName: 'Spry',
      managers: [burlId, olaId],
      responsibleFor: [ottersId, frogsId],
    },
    {
      id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
      firstName: 'Ardith',
      lastName: 'Azevado',
      managers: ['b0dc644a-5335-489b-8a2c-4e086c7819a2'],
      responsibleFor: [
        tigersId,
        bearsId,
      ],
    },
    {
      id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
      firstName: 'Emery',
      lastName: 'Elser',
      managers: [stephanieId],
      responsibleFor: [
        lionId,
        bearsId,
        elephantsId,
      ],
    },
  ],
  hours: {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  },
  prices: {
    adult: 49.99,
    senior: 24.99,
    child: 20.99,
  },
};
