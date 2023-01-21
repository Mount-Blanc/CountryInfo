
const Cars = [
    {
            Brand: 'Audio',
      Year: 1999,
    },
    {
      Brand: 'Glass',
      Year: 2010,
    },
  ];
  
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];


export const resolvers = {
  Query: {
    books: () => books,
    cars: () => Cars
  },
};

