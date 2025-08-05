import { memo, useCallback, useState } from "react"

    const Button=memo(({onClick,children})=>{
        console.log(`Rendering button ${children}`)
        return <button className="bg-blue-500 rounded-xl py-2 px-4 mr-4" onClick={onClick}>{children}</button>
    })
export default function Usecallback(){
const [count,setCount]=useState(0)

const increment= useCallback(()=>{
console.log("increment")
setCount((prevcount)=>prevcount+1)
},[])

const decrement = useCallback(()=>{
console.log("decrement")
    setCount((prevcount)=>prevcount-1)

},[])
    return(
        <>
        <h1>Thi is the Usecallback Hook {count}</h1>
        {/* <Button onClick={increment(()=>setCount((prevcount)=>prevcount+1))}>INCREMENT</Button> */}
        {/* <Button onClick={decrement(()=>setCount((prevcount)=>prevcount-1))}>DECREMENT</Button> */}
        <Button onClick={increment}>INCREMENT</Button>
        <Button onClick={decrement}>DECREMENT</Button>
        </>
    )}