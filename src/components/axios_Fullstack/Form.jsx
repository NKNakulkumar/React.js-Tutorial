import { useEffect, useState } from "react"
import { postData, updateData } from "./api/Postapi";

export const FormData=({data,setdata,updatedataapi,setupdatedataapi})=>{
  const [adddata,setadddata]=useState({
    title:"",
    body:""
  })

let isempty = Object.keys(updatedataapi).length===0;

// data change 
useEffect(() => {
  
updatedataapi&&
setadddata({
  title:updatedataapi.title||"",
  body:updatedataapi.body||""
})


}, [updatedataapi]);

const HandleInputchange=(e)=>{
  const name = e.target.name;
  const value = e.target.value;

  setadddata((prev)=>{
// console.log(prev)
return{
  ...prev,[name]:value,
}
  })
}

const addpostdata = async () => {
  const res = await postData(adddata);
  if (res.status === 201) {
    setdata([...data, res.data]);
    setadddata({title: "", body: ""}) // Changed from setdata to setadddata
  }
}

// updatePostdata
const updatePostdata = async () => {
  try {
    const res = await updateData(updatedataapi.id, adddata);
    console.log(res)
    if (res.status === 200) {
      // Update the data state with the updated post
      setdata((prev)=>{
        return prev.map((currelem)=>{
          return currelem.id===res.data.id ? res.data:currelem ;
        })
      })
      // Reset the form
      setadddata({ title: "", body: "" });
      setupdatedataapi({})
    }
  } catch (error) {
    console.log("Error updating post:", error);
  }
};
const Handleformsubmit=(e)=>{
e.preventDefault();
const action = e.nativeEvent.submitter.value;
if (action==="Add") {
addpostdata();
}
else if(action==="Edit"){
updatePostdata();
}
}
    return(
       <>
      <form onSubmit={Handleformsubmit}>
        <label htmlFor="title"></label>
        <input type="text"
        name="title"
        id="title"
        placeholder="Enter Text"
        value={adddata.title}
        onChange={HandleInputchange}
        autoComplete="off" className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 shadow-[0_4px_12px_0_rgba(0,0,255,0.2)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mr-2" />
      
          <label htmlFor="body"></label>
        <input type="text"
        name="body"
        id="body"
        placeholder="Enter Text"
        value={adddata.body}
        onChange={HandleInputchange}
        autoComplete="off" className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 shadow-[0_4px_12px_0_rgba(0,0,255,0.2)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        <button className="bg-green-500 text-white rounded-xl py-2 px-4 ml-4 mb-4 hover:bg-blue-600 transition duration-300" value={isempty?"Add":"Edit"}>{isempty?"Add":"Edit"}</button>
      </form>
       </>
    )
}



