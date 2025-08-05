import { useState } from "react";
import { MemoCounts } from "./MemoCount";
export const Reactmemo=()=>{
    const [Count ,setCount] = useState(0)
const Handleclick=()=>{
    setCount(()=> Count+1);
}
    return(
        <>
        <section className="bg-black py-2 px-4 pt-10 pb-10 w-70 m-auto rounded-4xl" >
        <h1 className="text-white">{Count}</h1>
        <button  className="bg-blue-500 rounded-xl py-2 px-4" onClick={Handleclick}>INCREMENT </button>
        <MemoCounts/>
        </section>
        </>
    )
} 