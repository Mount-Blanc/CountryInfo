import axios from 'axios'
 
 


const countries = [

  {
    name: {
      common: 'Peru'
    },
    
    capital: ['lima'],
    currencies: {
      PEN: {
        name: "Peruvian sol"
      }
    },
    flag:"🇵🇪"
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
  // Resolvers define how to fetch the types defined in your schema.

// This resolver retrieves books from the "books" array above.

// countries.forEach(obj => {
//   Object.entries(obj).forEach(([key,value]) => {
//     if (typeof value === 'object') {
//       const keyvaluepairs = Object.entries(value);
      
//       const simpleObject= Object.fromEntries(keyvaluepairs)
//       console.log(simpleObject)
//     } 
//   })
// })


export const resolvers = {

    Query: {
  
      books: () => books,
      Country: () => countries
    //    axios.get('https://restcountries.com/v3.1/name/peru')
    //  .then(function (response) {
    // console.log(response);
    //   })
    //   .catch(function (error) {
    //      console.log(error);
    //   })
    

    // },
  
  }
}
