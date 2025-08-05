import { useState } from "react"

export const Liftstateup=()=>{
const [inputvalue,setinputvalue ] = useState("")
return(
<>
<Inputcomponent inputvalue={inputvalue} setinputvalue={setinputvalue}/>
<Displaycomponent inputvalue={inputvalue}/>

</>

    )
}

const Inputcomponent=({inputvalue,setinputvalue})=>{
    return(
        <>
        <input type="text" placeholder="Enter your text" value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)} />
        </>
    )
}

const Displaycomponent=({inputvalue})=>{
    return(
    <p className="main-div">Display text: {inputvalue}</p>
    )
}