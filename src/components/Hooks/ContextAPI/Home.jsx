
import {  useBioContext } from "."

export const Home=()=>{

  const {myname,age} =  useBioContext()
    return(
        <h1> THis is an Home componenet in Context API. This is my  {myname} My age is {age} </h1>
    )
}