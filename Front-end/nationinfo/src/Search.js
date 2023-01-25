import './Search.css'
import { useState } from 'react';
import Display from './Display';
import { useContext } from 'react';
import { Context } from './context';

function Search () {
const countryValue = useContext(Context)

    const [userinput, setuserinput] = useState('')
    const [isSubmitted, setisSubmitted] = useState(false)

    const inputHandler = (event) => {
        setuserinput(event.target.value)

    }

    const submitHandler = (event) => {
        event.preventDefault();
       countryValue.countryValue=userinput
        console.log(countryValue)
         setisSubmitted(true)

         setuserinput('')

       
    }

    return(
        <>
        <form onSubmit={submitHandler}className='search'>
            <input 
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