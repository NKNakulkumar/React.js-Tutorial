import { useId } from "react"

export const Useid=()=>{
    const id = useId();
    return(
        <>
        <form>
            <div>
                <label htmlFor={id+"username"}>Username  </label>
                <input type="text"  id={id+"username"}  name="name" />
            </div>
            <div>
                <label htmlFor={id+"password"}>password  </label>
                <input type="password"  id={id+"password"} name="password" />
            </div>
            <div>
                <label htmlFor={id+"email"}>Email  </label>
                <input type="email"  id={id+"email"} name="email" />
            </div>
            <button type="submit" className="bg-blue-500 rounded-xl py-2 px-4">Submit</button>
        </form>
        </>
    )
}