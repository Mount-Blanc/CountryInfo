import React from 'react'
export const Context = React.createContext({})

export const Contextprovider = (props) => {

return (
   
    <Context.Provider value ={ {countryValue:''}}>
        {props.children}
    </Context.Provider>
)
}