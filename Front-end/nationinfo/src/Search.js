import './Search.css'
import { useState } from 'react';
import Display from './Display';
import { useContext } from 'react';
import { Context } from './context';

function Search () {
const ctx = useContext(Context)

    const [userinput, setuserinput] = useState('')
    const [isSubmitted, setisSubmitted] = useState(false)

    const selectHandler = (event) => {
        setuserinput(event.target.value)
    }

   

    return(
        <>
       <select
      value={userinput}
      onChange={selectHandler}
    >
        <option>{"america"}</option>
    </select>
     {isSubmitted && <Display/> }
    </>
    )
}
export default Search