import './App.css';
import {useState} from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';

const client = new ApolloClient({

    uri: 'http://localhost:4000',
  
    cache: new InMemoryCache(),
  
  });

function App() {

  
  const [userinput, setuserinput] = useState('')
  return (
    <ApolloProvider client={client}>
      <input value={(event)=> {setuserinput(event.target.value)}}type='text'placeholder='Enter Country'/>
    </ApolloProvider>
  );
}

export default App;
