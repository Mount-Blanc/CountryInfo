
import axios from 'axios';

axios.get('https://countries.trevorblades.com')
  .then( (response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });

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
 const response = fetch('https://countries.trevorblades.com/')

export const resolvers = {
  Query: {
    books: () => books,
    cars: () => Cars
  },
};

