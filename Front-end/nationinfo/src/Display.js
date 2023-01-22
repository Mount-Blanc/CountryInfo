import { useQuery, gql } from '@apollo/client';

import Card from './Card';

const GET_LOCATIONS = gql`

  query GetLocations {

    books {

     title
     author

    }

  }

`;


const Display = () => {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

let content
if (loading) {
return content = <p>Loading...</p>
}

    return data.books.map(({ title, author }) => (
        <Card>
    
        <div >
    
          <h3>{title}</h3>    
          <br />
        
          <p>{author}</p>
    
          <br />
    
        </div>
        </Card>
    
      ));
    
}
export default Display;