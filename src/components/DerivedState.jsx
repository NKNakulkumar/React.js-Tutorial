import { useState } from "react"

export const DerivedState=()=>{
    const [users,setusers]= useState([
        {name:"Nakul",age : 20},
        {name:"aman",age : 24},
        {name:"tarun",age : 25},
    ])
    // dervided state
    const usercount = users.length;
    const average = users.reduce((accu, current) => accu + current.age, 0) / usercount;

    return(
        <> 
        <h1> This is an derived stated example</h1>
       <ul> {
        users.map((curr,index)=>{
            return (
        <li key={index}>
                    <div>{curr.name} -{curr.age}</div>
                </li>
        )
        })
        }
         <p>{usercount}</p>
         <p>{average}</p>
        </ul>
        </>
    )
}