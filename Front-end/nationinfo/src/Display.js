import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';

import Card from './Card';

const GET_COUNTRY = gql`

query GET_COUNTRY ($userCountry: String!) {
  Country(userCountry: $userCountry) {
    name {
      common
    }
    flag
    timezones
    population
    capital
    continents
  }
}`;


const Display = (props) => {
  const [user, setuser] =useState('mexico')
    const { loading, error, data } = useQuery(GET_COUNTRY,
      {variables: {userCountry:user}});

  let content
if (loading) {
return content = <p>Loading...</p>
}
// if (error) {
//   return content = <p>An error has occured {error.status}!</p>
// }
console.log(data)
    return data.Country.map(({name,flag,capital}) => (
        <Card>
        <div >
      <div>
          <h3>{name.common}</h3> 
          <span>{flag}</span>   
        </div>

        <span>{capital[0]}</span>  
        </div>
        </Card>
    
      ));
    
}
export default Display;