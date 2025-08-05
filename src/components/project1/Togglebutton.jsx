
import { useState } from 'react'
import './Toogle.css'
export const Tooglecomponent = () => {
    const [ison, setison] = useState("")
    const Handleswitchclick = () => {
        setison(!ison);
    }
    const switchtext = ison ? "on" : "of"
    const backcolor = { backgroundColor: ison ? 'green' : '' }

    return (
        <>
            <div className='toggle-switch' onClick={Handleswitchclick} style={backcolor}>
                <div className={`switch ${switchtext}`}>
                    <span className='switch-state'>{switchtext}</span>
                </div>
            </div>
        </>
    )
}