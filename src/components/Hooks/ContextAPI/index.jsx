// import { createContext, useContext } from "react";
import { createContext, use } from "react";

// first step create a context.
 export const Biocontext = createContext();
 // second step provider .
 export const Bioprovider = ({children})=>{
    const myname = "Computers";
    const age = 21;
    console.log(children)
    return <Biocontext.Provider value={{myname,age}}>
        {children}
    </Biocontext.Provider>
 }
 // custom hooks  //  useBioContext- Home 
 export const  useBioContext=()=>{
    const context = use(Biocontext)
    if(context === undefined){
    throw new Error("Component must be wrap in Bio providers ");
        
    }
    return context
 }