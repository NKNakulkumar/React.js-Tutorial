// import { NavLink, useNavigate, useRouteError } from "react-router-dom";
import {  useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage=()=>{
    const error = useRouteError()
    const navigate = useNavigate()
    const HandlegoBack=()=>{
        navigate(-1);
        // navigate("/"); // - Homepage 
    }
    if (error.status===404) {
    return(
        <>
        <section className=" flex justify-center items-center bg-white w-full h-screen fixed top-0 left-0 z-10" >
            <figure className="w-[400px] h-[400px] overflow-hidden relative">
                <img src="src\components\Router_project\notfound.gif" alt="404Image"  />
                <figcaption className="text-black">Page Not Found – Oops! This page doesn't exist.</figcaption>
            </figure>
            {/* <NavLink to="/" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-amber-700 " > Back to previous page</NavLink> */}
            <button onClick={HandlegoBack} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-amber-700">Go Back</button>
        </section>
        
        </>
    )
}
console.log(error)
return <h1> This page is not exists</h1>

}

 