import './Search.css'
import { useState } from 'react';
import Display from './Display';
import { useContext } from 'react';
import { Context } from './context';
import { useQuery, gql } from '@apollo/client';



const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

const list = ['america','germany']

function Search () {
const ctx = useContext(Context)
// const { loading, error, data } = useQuery(LIST_COUNTRIES)

const [userinput, setuserinput] = useState(list[0])
const [isSubmitted, setisSubmitted] = useState(false)

    const selectHandler = (event) => {
        setuserinput(event.target.value)
        console.log(userinput)
    }

   
    return(
        <>
       <select
      value={userinput}
      onChange={selectHandler}>
        {list.map((option, index) => (
        <option key={index} value={option}>{option}</option>

        ))}



    </select>
     {isSubmitted && <Display/> }
    </>
    )
}
export default Search