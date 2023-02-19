import React from 'react'
export const Context = React.createContext({})

interface ContextProps {
    children?: React.ReactNode;
}

export const Contextprovider = (props:ContextProps) => {

return (
   
    <Context.Provider value ={ {countryValue:''}}>
        {props.children}
    </Context.Provider>
)
}