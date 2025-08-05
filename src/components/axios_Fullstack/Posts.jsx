import { useEffect, useState } from "react";
import { deletePost, getPost } from "./api/Postapi";
import { FormData } from "./Form";

export const Posts=()=>{
    // console.log(getPost());
const [data,setdata]=useState([]);
const [updatedataapi,setupdatedataapi]=useState({})

const getPostdata=async()=>{
const res = await getPost()
console.log(res.data)
setdata(res.data)
}
// delete
const Handledelete=async(id)=>{
    const res = await deletePost(id)
    try {
    if(res.status===200){
const newupdatedpost = data.filter((currpost)=>{
return currpost.id!==id;
})
setdata(newupdatedpost);
    }
    else{
        console.log("Failed to delete the post ", res.status);
    }
    } catch (error) {
        console.log(error)
    }
}
// edit

const Handleeditchange=(currelem)=>setupdatedataapi(currelem)

    useEffect(() => {
    getPostdata();
    }, []);
    return(
      <>
      <section className="bg-gray-900 pt-7">
        <FormData data={data} setdata={setdata} updatedataapi={updatedataapi}setupdatedataapi={setupdatedataapi}/>
      </section>
        <section className="bg-gradient-to-r from-green-200 to-blue-300  ">
        <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
          {
            data.map((currelem) => {
              const { id, body, title, userId } = currelem;
              return (
                <li key={id} className="bg-gradient-to-r from-red-100 to-purple-500 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col ">
                  <div className="p-6 flex-1">
                  <p className="text-black -ml-50">Id: {id}</p>
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                    <p className="text-black mt-2">{body}</p>
                  </div>
                  <div className="flex justify-between p-4 border-t border-gray-200">
                    <button className="bg-blue-500 text-white rounded-xl py-2 px-4 mr-4 hover:bg-blue-600 transition duration-300" onClick={(()=>Handleeditchange(currelem))}>Edit</button>
                    <button className="bg-red-500 text-white rounded-xl py-2 px-4 hover:bg-red-600 transition duration-300" onClick={(()=>Handledelete(id))}>Delete</button>
                  </div>
                </li>
              );
            })
          }
        </ol>
      </section>

      </>
    )
}