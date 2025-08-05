import { useState,useEffect } from "react"

export const Cleanup=()=>{
    const [count , setcount]=useState(0)
    useEffect(() => {
      const timer =   setInterval(() => {
            setcount((prev)=>prev+1)
        }, 1000);
       return()=> clearInterval(timer)
    }, []);
    return (
        <>
        <h1> My friends on Youtube</h1>
        <span> <span className="mr-4">👍🏻</span>{count} <span className="ml-4">💗</span></span>
        <h2>Display real time likes </h2>
        </>
    )
}