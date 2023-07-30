import React, { createContext, useState } from 'react'
export const  registerContext = createContext()

function ContextShare({children}) {
    
//to hols register component data
const [registerData,setRegisterData] = useState("")


  return (
    <>
    <registerContext.Provider value={{registerData,setRegisterData}}>

        {children}
    </registerContext.Provider>
    </>
  )
}

export default ContextShare