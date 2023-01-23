import { useQuery, gql } from '@apollo/client';

import Card from './Card';

const GET_LOCATIONS = gql`

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
}
`;


const Display = () => {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

let content
if (loading) {
return content = <p>Loading...</p>
}

    return data.GetCountryInfo.map(({ name,flag,capital,currencies }) => (
        <Card>
    
        <div >
    
          <h3>{name}</h3>    
          <br />
        
    
          <br />
    
        </div>
        </Card>
    
      ));
    
}
export default Display;