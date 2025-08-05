import { createContext, use, useState } from "react";

export const Themecontext = createContext()

export const ThemeProvider =({children})=>{
const [theme,settheme]=useState("dark")
const Handletoogle=()=>{
    return settheme((prevtheme)=> prevtheme === "dark"?"light":"dark")
}

return <Themecontext.Provider value={{theme ,Handletoogle}}>
{children}
    </Themecontext.Provider>
} 
// create a component 
export const LightDark =()=>{
    const {theme ,Handletoogle} = use(Themecontext)
    return(
        <>
        <div className={`${theme==="dark"? "bg-black h-screen w-full":"text-white"} `}>
            <h1 className={`${theme==="dark"? "text-white":"text-black"}`} >Dark Mode to this website </h1>
            <p className={`${theme==="dark"? "text-white":"text-black"}`}> This is a React.js Component❤️❤️❤️❤️</p>
            <button onClick={Handletoogle} className="bg-blue-500 rounded-xl py-2 px-4 cursor-pointer">{theme === "dark" ? "LightMode":"DarkMode"}</button>
        </div>
        </>
    )
}