import React from "react"
import { useState } from "react"
import Navbars from "./Component/Navbars"
import NewsBoard from "./Component/NewsBoard"

const App = () => {
  const[category,setCategory]=useState("general")
  return (
    <>
    <Navbars setCategory={setCategory}/>
    <NewsBoard category={category}/>
    </>
  )
}

export default App