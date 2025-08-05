import { useQuery } from "@tanstack/react-query"
import { NavLink, useParams } from "react-router-dom"
import { postInvData } from "./Api/Apidata"

export const FetchInd=()=>{

    const {id}= useParams()
    const { data ,isError,isPending,error} = useQuery({
        queryKey: ['posts',id],//usestate
        queryFn: () => postInvData(id),// useeffect
        // gcTime
        // staleTime:10000
        // refetchInterval:1000,
        // refetchIntervalInBackground:true,
    })


if(isPending) return <p> Loading....</p>
if(isError) return <p>Error: {error.message ||"Something went error"}</p>
    return (
        <div >
            <ul >
                <h2>Post Id Number : {id}</h2>
                <li > 
                    <p>id : {data.id}</p>
                    <p>{data.title}</p>
                    <p>{data.body}</p>
                </li>
            </ul>
            <NavLink to="/rq">
            <button className="cursor-pointer transition-all bg-blue-500 text-white px-10 py-10 rounded-lg
  border-blue-600
  border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
  active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
  Go Back
</button>

            </NavLink>
        </div>
    )
}