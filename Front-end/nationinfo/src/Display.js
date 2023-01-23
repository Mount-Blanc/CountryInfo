import { useQuery, gql } from '@apollo/client';

import Card from './Card';

const GET_COUNTRY = gql`

query GetCountry {
  Country {
    name {
      common
    }
    flag
    currencies {
      PEN {
        name
      }
    }
    capital
  }
}
  `;


const Display = () => {
    const { loading, error, data } = useQuery(GET_COUNTRY);

    
let content
if (loading) {
return content = <p>Loading...</p>
}
if (error) {
  return content = <p>An error has occured !</p>
}

    return data.Country.map(({ name,flag,capital,currencies}) => (
        <Card>
    
        <div >
      <div>
          <h3>{name.common}</h3> 
          <span>{flag}</span>   
        </div>

        <span>{capital}</span>  
        <span>{currencies.PEN.name}</span>  
        </div>
        </Card>
    
      ));
    
}
export default Display;