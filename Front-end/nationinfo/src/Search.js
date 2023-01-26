import './Search.css'
import { useState } from 'react';
import Display from './Display';
import { useContext } from 'react';
import { Context } from './context';

function Search () {
const ctx = useContext(Context)

    const [userinput, setuserinput] = useState('')
    const [isSubmitted, setisSubmitted] = useState(false)

    const inputHandler = (event) => {
        setuserinput(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (userinput === '') {
            return
        }
        setisSubmitted(false)
        ctx.countryValue=userinput
        setisSubmitted(true)

         setuserinput('')

       
    }

    return(
        <>
       <select
      value={userinput}
      onChange={(event) => setuserinput(event.target.value)}
    >
        <option>{"america"}</option>
    </select>
     {isSubmitted && <Display/> }
    </>
    )
}
export default Search