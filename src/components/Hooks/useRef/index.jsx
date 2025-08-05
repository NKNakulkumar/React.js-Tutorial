import { useRef } from "react"

export const Useref = () => {
    const username = useRef(null)
    const password = useRef(null)

    const Handlesubmit=(e)=>{
        e.preventDefault();
        console.log(username.current.value,password.current.value)
    }
    return (
        <>
        <form onSubmit={Handlesubmit}>
            <input type="text" placeholder="username" id="username" ref={username} className="text-white bg-black text-center" /> <br />
            <input type="text" placeholder="password" id="password" ref={password} className="text-white bg-black text-center" /><br />
            <button className="bg-blue-500 font-bold text-white rounded-b-xl w-2xs py-2">Submit</button>
        </form>
        </>
    )
}