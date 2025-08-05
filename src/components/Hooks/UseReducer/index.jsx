import { useReducer } from "react"

export const ReducerComponent =()=>{
const inicialstate = {
    count:0,
    inc:2,
    dec:2,
}

const reducer=(state,action)=>{
// console.log(state,action)
switch (action.type) {
    case "INCREMENT":
    return {...state,count:state.count+2}
        
    case "DECREMENT":
        return {...state,count:state.count-2}


        case "RESET":
            return {...state,count:0}

    default:
        return state;
}
    }
    const [state,dispatch]=useReducer(reducer,inicialstate);
    console.log(useReducer(reducer,0))
    return (
        <>
        <div>
        <h1 className="mb-20"> Hello useReducer Hook </h1>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})} className="bg-blue-500 rounded-xl py-2 px-4 cursor-pointer flex-1/3  mr-2.5">INCREMENT</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}  className="bg-blue-500 rounded-xl py-2 px-4 cursor-pointer mr-2.5">DECREMENT</button>
        <button onClick={()=>dispatch({type:"RESET"})} className="bg-blue-500 rounded-xl py-2 px-4 cursor-pointer mr-2.5">RESET</button>
        </div>
        </>
        
    )
} 
// seperate file
