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

   const { data, loading, error } = useQuery(LIST_COUNTRIES)
const [userinput, setuserinput] = useState('Togo')
const [isSubmitted, setisSubmitted] = useState(false)

    const selectHandler = (event) => {
        setuserinput(event.target.value)
        console.log(userinput)
    }
   
console.log(data)
    return(
      <>
      <div className='search'>
        <select value={userinput} onChange={selectHandler}>
           {data.Select.map( ({common}) => (
         <option value={common}>
         {common}
        </option>
    ))
    } 
      </select>      
       </div>

     <Display/> </>
    )
}
export default Search