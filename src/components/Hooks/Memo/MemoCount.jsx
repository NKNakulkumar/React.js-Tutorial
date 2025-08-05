import { memo, useRef } from "react"

export const MemoCounts=memo(({Biodata})=>{
    const rendercount = useRef(0)
    console.log(rendercount)
    return(
        <div>
            <p className="text-white"> Nothing can change there Ive now rerender</p>
            <span className="text-red-500">{rendercount.current++}time(s)</span>
            <p className="text-white">{Biodata.name}</p>
        </div>
    )
})