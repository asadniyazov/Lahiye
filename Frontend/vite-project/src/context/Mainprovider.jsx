import React, { createContext, useState } from 'react'
  export const  Maincontext=createContext()
function Mainpovider({children}) {
   
    const [isHiddenUl, setisHiddenUl] = useState(false)
    function HiddenBtnClick() {
        setisHiddenUl(!isHiddenUl)
    }
    
   
  return (
    <Maincontext.Provider value={{isHiddenUl,HiddenBtnClick}}>{children}</Maincontext.Provider>
  )
}

export default Mainpovider