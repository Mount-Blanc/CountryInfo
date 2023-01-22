import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

function App() {

  const client = new ApolloClient({

    uri: 'http://localhost:4000',
  
    cache: new InMemoryCache(),
  
  });
  const author =client

  .query({

    query: gql`

      query GetLocations {

        books {

        author

        }

      }

    `,

  })

  .then((result) => console.log(result));
  return (
    <div >
     {author}
    </div>
  );
}

export default App;
