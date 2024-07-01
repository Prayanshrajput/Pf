import React, { createContext, useState } from 'react'

export const Appcontext = createContext();

export default function AppcontextProvider({children}){
    
    const [Listfornavdata,setListfornavdata]=useState(false)

    const value={Listfornavdata,setListfornavdata}

    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>
}
