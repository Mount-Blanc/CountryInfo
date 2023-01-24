import './Search.css'
import { useState } from 'react';

function Search () {
    const [userinput, setuserinput] = useState('')

    const inputHandler = (event) => {
        setuserinput(event.target.value)
    }

    return(
        <div className='search'>
            <input 
            value={userinput}
            onChange={inputHandler}
            type='text'
            placeholder='Type a Country Name'/>
            <button>Search</button>

         {/* /* /* {userinput && <Display/> } */}
        </div>
    
    )
}
export default Search