import { use } from "react"
import { Biocontext } from "."

export const About=()=>{
 
//   const {myname,age} = use(Biocontext)
let myname,age;

  const istrue = true
  if(istrue){
( {myname,age} = use(Biocontext)); // usehook in a condititon 

  }
    return(
        <h1> THis is an (About) componenet in  Context API. This is my  {myname} My age is {age} </h1>
    )
}