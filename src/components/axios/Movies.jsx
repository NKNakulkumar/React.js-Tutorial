// import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "./Card"
import { getmovie } from "./GetService"

export const Movies=()=>{
    const [data,setdata]=useState([])
const getmoviedata=async()=>{
    try {
  const res=  await getmovie();
  console.log(res.data.Search);
  setdata(res.data.Search);
    } catch (error) {
        console.log(error)
        console.log(error.response.data)
        console.log(error.message)
        console.log(error.response.status)
    }
}
  useEffect(()=>{
getmoviedata();
  },[])
    return(
<ul className="container mx-auto p-4 grid grid-cols-4  gap-7">
    {
        data.map((currelem)=>{
            return <Card key={currelem.imdbID} moviedata={currelem}/>
        })
    }
</ul>
    )
}