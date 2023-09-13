import React, { useState } from 'react'
import { createContext } from 'react'
const Context = createContext()

export default function AppContext({children}) {


    const [openContext,setOpenContext] = useState(null)
    const [message,setMessage] = useState("")
    
    const showSnack = (passMessage)=>{
      setMessage(passMessage)
      console.log(passMessage)
      openContext[0]();
    }

  return (
    <div>
      <Context.Provider value={{openContext,setOpenContext,showSnack, message}}>
        {children}
      </Context.Provider>
    </div>
  )
}

export {Context};
