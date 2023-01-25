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
        ctx.countryValue=userinput
        setisSubmitted(true)

         setuserinput('')

       
    }

    return(
        <>
        <form onSubmit={submitHandler}className='search'>
            <input 
            value={userinput}
            onChange={inputHandler}
            type='text'
            placeholder='Type a Country Name'/>
            <button>Search</button>

         
        </form>
     {isSubmitted && <Display/> }
    </>
    )
}
export default Search