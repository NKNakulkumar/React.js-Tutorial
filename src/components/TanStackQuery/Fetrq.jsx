import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { fetchposts } from "./Api/Apidata"
import './fetch.css'
import { NavLink } from "react-router-dom"
import { useState } from "react"
export const Fetrq = () => {

const [pageno,setpageno]=useState(0)
    const { data ,isError,isPending,error} = useQuery({
        queryKey: ['posts',pageno],//usestate
        queryFn:() => fetchposts(pageno),// useeffect
        // gcTime
        // staleTime:10000
        // refetchInterval:1000,
        // refetchIntervalInBackground:true,
        placeholderData:keepPreviousData,
    })


if(isPending) return <p> Loading....</p>
if(isError) return <p>Error: {error.message ||"Something went error"}</p>
    return (
        <div >
            <ul className="card">
                {
                    data?.map((currelem) => {
                        const { id, title, body } = currelem
                        return (
                            <li className="card2" key={id}>
                                <NavLink to={`/rq/${id}`}>
                                <p>{id}</p>
                                <p>{title}</p>
                                <p >{body}</p>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button onClick={()=> setpageno((prev)=> prev-3)} disabled={pageno===0?true:false} className="btn1"  >Prev</button>
                <p style={{marginLeft:"-25vw"}}>{(pageno/3)+1}</p>
                <button onClick={()=> setpageno((prev)=> prev+3)} disabled={pageno===100?true:false} className="btn2" >Next</button>
            </div>
        </div>

    )
}
