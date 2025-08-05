import { useId, useRef } from "react"

export const Forwardref = () => {
    const username = useRef(null)
    const password = useRef(null)

    const Handlesubmit=(e)=>{
        e.preventDefault();
        console.log(username.current.value,password.current.value)
    }
    return (
        <>
        <form onSubmit={Handlesubmit}>
            < Beforereact19Input label = "username"  ref={username} placeholder="username" className="text-white bg-black text-center" /> <br />
            < Beforereact19Input label = "password"  ref={password} placeholder="password" className="text-white bg-black text-center" /><br />
            <button className="bg-blue-500 font-bold text-white rounded-b-xl w-2xs py-2">Submit</button>
        </form>
        </>
    )
}
// I need to create this Beforereact19Input componenet 
const Beforereact19Input=({label,ref})=>{
    const id = useId();
return(

<div> <label htmlFor={id}></label>{label}
<input type="text" ref={ref} />
</div>
)
}