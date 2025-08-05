import { useState } from "react"

export const ShortCircit=()=>{
    const [login , setlogin]=useState(true)
    const [user ,setuser]=useState("")
    return(
        <>
        <section>
        <h1 className="font-semibold">This is an short circuit evaluation </h1>
        <div>
           {login && <span className="bg-black text-2xl text-white grid w-56 ml-115 mt-5">You are log in </span>}
        {user ? `${user} are log in `:"plse  loged in "}

            <button onClick={()=>setlogin(!login)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mt-10 cursor-pointer">Toggle login state </button>
            <button onClick={()=>setuser("Tony ")}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mt-10 cursor-pointer">set user </button>
            <button onClick={()=>setuser("")}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mt-10 cursor-pointer"> Clear user </button>
        </div>
        </section>
        </>
    )
}