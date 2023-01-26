import { useQuery, gql } from '@apollo/client';
import { useContext } from 'react';
import { Context } from './context';
import Card from './Card';

const GET_COUNTRY = gql`

query GET_COUNTRY ($userCountry: String!) {
  Country(userCountry: $userCountry) {
    name {
      common
    }
    flag
    population
    capital
    continents
  }
}`;


const Display = ({userinput}) => {
     const ctx=useContext(Context)
    //  const userinput =ctx.countryValue

  const { loading, error, data } = useQuery(GET_COUNTRY,
      {variables: {userCountry:`${userinput}`}} ,
      {

        fetchPolicy: 'network-only', // Used for first execution
      
        nextFetchPolicy: 'cache-first', // Used for subsequent executions
      
      });
     
console.log(data)
  let content
if (loading) {
return content = <p>Loading...</p>
}
// if (error) {
//   return content = <p>An error has occured {error.status}!</p>
// }
console.log(data)


    return data.Country.map(({name,flag,capital,continents,population}) => (
        <Card>
        <div >
      <div>
          <h3>{name.common}</h3> 
          <span>{flag}</span>   
        </div>

        <span>{capital[0]}</span>  
        <div>{continents}</div>  
        <div>{population}</div>  


        </div>
        </Card>
    
      ));
    
}
export default Display;