import './Search.css'
import { useState } from 'react';
import Display from './Display';
import { useContext } from 'react';
import { Context } from './context';
import { useQuery, gql } from '@apollo/client';



const LIST_COUNTRIES = gql`
query List_COUNTRIES {
  Select {
    common
    
  }
}
`;


function Search () {
const ctx = useContext(Context)

   const { data, loading, error } = useQuery(LIST_COUNTRIES,
    {

      fetchPolicy: 'network-only', // Used for first execution
    
      nextFetchPolicy: 'cache-first', // Used for subsequent executions
    
    });
const [userinput, setuserinput] = useState('United States')
const [isSubmitted, setisSubmitted] = useState(false)

    const selectHandler = (event) => {
        setuserinput(event.target.value)
        console.log(userinput)
    }

if (loading) {
  return <p>Loading...</p>
}

console.log(data)
    return(
      <>
    <div className='search'>
        <select value={userinput} onChange={selectHandler}>
           {data.Select.map( ({common,official}) => (
         <option key={official} value={common}>
         {common}
        </option>
    ))
    } 
      </select>      
       </div>
     <Display userinput={userinput}/> </>
    )
  
}
export default Search