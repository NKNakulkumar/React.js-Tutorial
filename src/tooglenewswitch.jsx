import { useState } from "react"
import '../src/toggle.css'
export const Toooglenew = () => {


    const [ison, setison] = useState("")
    const Handleclick=()=>{
        setison(!ison)
    }
    const icon = ison ? "on":"off"
    return (
        <>
            <section className="toggle-switch" onClick={Handleclick} style={{background : ison?"green":"red"}}>
                    <div className={`switch ${icon}`}>
                        <span className='switch-state'>
                            {icon}
                        </span> 
                        </div>
            </section>

        </>
    )
}