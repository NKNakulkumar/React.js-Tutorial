import { useContext } from "react"
import { Biocontext } from "."

export const Services=()=>{

  const {myname,age} = useContext(Biocontext)
    return(
        <h1> THis is an (Services) componenet in  Context API. This is my  {myname} My age is {age} </h1>
    )
}