import { useState } from "react"

export const CounterAdvanced=()=>{

    const [count,setcount]=useState(0)
    const [steps,setsteps]=useState(0)

    const HandleIncrement=()=>{
        if (steps) {
            setcount(prevCount => Math.min(prevCount + steps, 100));
        } else {
            setcount(prevCount => prevCount + 1);
        }
        
    }
    const HandleDecrement = () => {
        if (steps) {
            setcount(prevCount => Math.max(prevCount - steps, 0));
        } else {
            setcount(prevCount => Math.max(prevCount - 1, 0));
        }

    }
    const Reset=()=>{
        setcount(0)
    }

    const handleInputchange=(e)=>{
        setsteps(Number(e.target.value))
    }
 return (
    <>
    <section className=" mx-auto text-center justify-center shadow-xl p-6 rounded-lg bg-white mt-20">
        <div>
            <h1 className="text-4xl"> USE  STATE CHALLENGE</h1>
            <span style={{ marginRight: '16vw', fontSize:'23px' }}>Count : {count}</span>
        </div>
        <div>
        <label className="mr-5 text-2xl">Steps :</label>
        <input  type="number" value={steps} onChange={handleInputchange} />
        </div>

        <div className="">
            <button className="inline-block px-4 mr-3 py-2 text-lg font-bold text-white bg-blue-500 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-700 transform hover:scale-110 shadow-md" onClick={HandleIncrement} disabled={count>= 100}>INCREMENT</button>
            <button className="inline-block px-4 mr-3 py-2 text-lg font-bold text-white bg-blue-500 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-700 transform hover:scale-110 shadow-md"  onClick={HandleDecrement} disabled={count<= 0}>DECREMENT</button>
            <button className="inline-block px-4 mr-3 py-2 text-lg font-bold text-white bg-blue-500 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-700 transform hover:scale-110 shadow-md"  onClick={Reset}>RESET</button>
        </div>
    </section>
    </>
 )
}