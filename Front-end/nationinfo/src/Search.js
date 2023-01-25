import './Search.css'
import { useState } from 'react';
import Display from './Display';




function Search () {
let content="mexico"

    const [userinput, setuserinput] = useState('')
    const [displayInfo, setdisplayInfo] = useState(false)


    const inputHandler = (event) => {
        setuserinput(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (userinput != '') {
            setdisplayInfo(userinput)
        }
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
    <Display countryname={content}/>
    </>
    )
}
export default Search