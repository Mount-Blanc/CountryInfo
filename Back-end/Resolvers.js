import axios from 'axios'
 
 


const countries = 

  {
  
    flag:"🇵🇪"
  }


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

      Select: async () => 
        await axios.get(`https://restcountries.com/v3.1/all`)
        .then( response => {
    
          const data=response.data
          
          const dataarray=[data]
            const listofnames= data.map(object => object.name)
          console.log(listofnames)
     })
          
        
            .catch( error => {
              console.log("error");
          })
      ,


      Country:async (parent,{userCountry}) => 
        await axios.get(`https://restcountries.com/v3.1/name/${userCountry}`)
    .then( response => {

      const data=response.data[0]

      const {name,flag,capital,continents,population} =data

      const Country = [{
     name:name,
     flag:flag,
     capital:capital,
     continents:continents,
     population:population,
      }]
      return Country
    })
        .catch( error => {
          console.log("error");
      })
  
  
}}
