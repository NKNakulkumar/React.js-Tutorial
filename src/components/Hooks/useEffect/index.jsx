import { useEffect, useState } from "react"

export const ReactuseEffect=()=>{
    // const [count,setcount]=useState(0)
    // useEffect(()=>{
    //     console.log("count valuue : ",count)
    // },[count])

// date changes in use effect
const [date , setdate]= useState("")
useEffect(() => {
    setInterval(() => {
        const updateddate = new Date()
        setdate(updateddate.toLocaleTimeString())
    }, 1000);
}, []);
return(
    <>
    <h1> Hello  Use effect </h1>
    <p>{date}</p>
    {/* <p>{count}</p> */}
    {/* <button onClick={()=>setcount(count+1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mt-10 cursor-pointer">Increment</button> */}
    </>
)
}