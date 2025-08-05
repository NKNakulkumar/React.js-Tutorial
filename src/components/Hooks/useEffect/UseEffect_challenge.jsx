import { useState ,useEffect} from "react"

export const UseEffectChallange=()=>{
    const [count, setCount]=useState(0)
    const [data, setdata]=useState("")

    useEffect(() => {
     document.title = `Count ${count}`  
    
     }, [count]);

 useEffect(() => {
    console.log(data)

 }, [data]);

    return(
        <>
        <div className="bg-black bg-cover h-screen text-white">
        <h1> Use Effect challenge</h1>
        <button onClick={()=>setCount(count+1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mt-10 mb-5 cursor-pointer">Increment</button>
        <p className="text-white mb-5">{count}</p>
        <span>
            <p> Name : {data}</p>
        </span>
        <input type="text" required placeholder="enter some details.." className="bg-white text-black text-center" value={data}  onChange={(event)=>setdata(event.target.value)}/>
        </div>
        </>
    )
}