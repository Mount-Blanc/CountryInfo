import './Search.css'
import { useState } from 'react';
import Display from './Display';
import { useContext } from 'react';
import { Context } from './context';
import { useQuery, gql } from '@apollo/client';



const LIST_COUNTRIES = gql`
query List_COUNTRIES {
  Select {
    official
  }
}
`;


function Search () {
const ctx = useContext(Context)
   const { data, loading, error } = useQuery(LIST_COUNTRIES)

const [userinput, setuserinput] = useState('Bouvet Island')
const [isSubmitted, setisSubmitted] = useState(false)

    const selectHandler = (event) => {
        setuserinput(event.target.value)
        console.log(userinput)
    }
    console.log(data)
    return(
      <>
        {/* { <select value={userinput} onChange={selectHandler}>
        {data.Select.map((countrynames) => (
          <option value={countrynames.common}>
            {countrynames.common}
          </option>
        ))}
      </select> } */}
     <Display/> </>
    )
}
export default Search