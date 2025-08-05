import { useEffect, useState } from "react"

export const Fetchapi = () => {
    const [apidata, setapidata] = useState(null)
const[loading,setloading]= useState(true)
const [error,seterror]= useState("")



    const Api= "https://pokeapi.co/api/v2/pokemon/pikachu";
    // promise 
    // const fetchpokimon= async()=>{
    //     fetch(Api).then((response) => response.json()).then((data) =>{ setapidata(data)
    //         setloading(false)
    //     }).catch((error) => 
    //         {
    //         console.log(error)
    //         seterror(error) 
    //         setloading(false)

    //     })

    // }
// asynch await

const fetchpokimon= async()=>{
       try {
        const resp  = await fetch(Api);
        const data = await resp.json();
        setapidata(data)
        setloading(false)
       } catch (error) {
        console.log(error)
         seterror(error) 
        setloading(false)
       }

    }


    useEffect(() => {
    fetchpokimon();
    }, [])
    console.log(apidata)
    if(loading)return(
        <div>
            <h1> Loading....</h1>
        </div>
    )
    if(error)return(
        <div>
            <h1> Error Message{error.message}</h1>
        </div>
    )
    return (
        <>
            <section className="flex flex-wrap justify-center gap-8 p-8  w-[calc(25%-2rem)] box-border bg-white rounded-lg shadow-lg flex-none m-0 transition-transform duration-200   hover:transform hover:scale-[0.95]">
               <header>
                <h1>This is an Image </h1>
               </header>
               <ul><li>
                <figure>
                    <img src={apidata.sprites.other.dream_world.front_default} alt={apidata.name} /></figure>
                    <h1> Name :  {apidata.name}</h1>
                     </li></ul>
            </section>

        </>
    )
}



    // fetch("https://picsum.photos/v2/list?page=1&limit=15").then((response) => response.json()).then((data) => setapidata(data)).catch((error) => console.log(error)) // not use create a loop taht will never use .