import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchusers } from "./Api/Apidata"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const InfiniteScroll=()=>{
 const {data , hasNextPage , fetchNextPage ,error,status,isFetchingNextPage }  = useInfiniteQuery({
        queryKey:['users'],
        queryFn:fetchusers, // function 
        getNextPageParam:(lastpage,allpages)=>{
            // console.log(lastpage,allpages);
            return lastpage.length===10?allpages.length+1:undefined;
        }

    })
    console.log(data)

// const handlescroll=()=>{
//     const bottom = window.innerHeight+window.scrollY>=document.documentElement.scrollHeight -1 ;
//     if(bottom&& hasNextPage){
//         fetchNextPage();
//     }
// }


// easy mrthod on package 
const { ref, inView, entry } = useInView({
    threshold: 1,
});


useEffect(()=>{
    if(inView&& hasNextPage){
         fetchNextPage();
        }
},[inView,fetchNextPage,hasNextPage])


if(status==="loading") return <p>Loading....</p>
if(status==="error") return <p>{error.messege}Something went error</p>
    return(
        <div>
        <ul>
        {
            data?.pages?.flatMap((page) => 
                page.map((currelem, index) => {
                    const {author,download_url,id} = currelem
                    return (
                        <li key={index} >
                            <p >{id}</p>
                            <p>{author}</p>
                            <img src={download_url} alt={`Image ${index} `} width={"300px"} height={"300px"}   />
                        </li>
                    )
                })
            )
        }
        </ul>
        <div ref={ref}>{isFetchingNextPage && <div>Loading more....</div> }</div>
        </div>
    )
}