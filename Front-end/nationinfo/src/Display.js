import { useQuery, gql } from '@apollo/client';

import Card from './Card';

const GET_COUNTRY = gql`

query GetCountryInfo {
  Country {
    name {
      common
    }
    flag
    capital
    currencies {
      PEN {
        name
      }
    }
  }
} `;


const Display = () => {
    const { loading, error, data } = useQuery(GET_COUNTRY);

    
let content
if (loading) {
return content = <p>Loading...</p>
}
// if (error) {
//   return content = <p>An error has occured {error.status}!</p>
// }

    return data.Country.map(({name,flag,capital,currencies}) => (
        <Card>
        <div >
      <div>
          <h3>{name.common}</h3> 
          <span>{flag}</span>   
        </div>

        <span>{capital[0]}</span>  
        <span>{currencies.PEN.name}</span>  
        </div>
        </Card>
    
      ));
    
}
export default Display;