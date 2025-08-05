import { useEffect, useState } from "react";
import { Pokemonlist } from "./Pokemonlist";
import './pokemon.css'
//pokimonlist import

export const Pokemoncard=()=>{
const [pokemon,setpokemon ]= useState([])
const[loading,setloading]= useState(true)
const[error,seterror] = useState(null)
const [search,setsearch]=useState("")


const Api = "https://pokeapi.co/api/v2/pokemon?limit=124";
const fetchpokemon= async()=>{
try {
    const resp = await fetch(Api);
    const data = await resp.json()
    // console.log(data)
    const detailedpokemondata = data.results.map(async(currpokemon)=>{
    const res = await fetch(currpokemon.url)
    const data = await res.json();
    return data;
   
    })
    // console.log(detailedpokemondata)
    const detailedresponse = await Promise.all(detailedpokemondata)
    console.log(detailedresponse)
    setpokemon(detailedresponse)
    setloading(false)
} catch (error) {
    console.log(error)
    setloading(false)
    seterror(error)

}
}// 

useEffect(()=>{
fetchpokemon();
    },[])
    //search functanality 
    const searchdata = pokemon.filter((curpokemon)=>curpokemon.name.toLowerCase().includes(search.toLowerCase()))

   if(loading) {
    return <div>
        <h1>Loading ....</h1>
    </div>
   }
   if(error){
    return <div>
        <h1>{error.message}</h1>
    </div>
   }
    return(
        <>
        <section className="cards-container">
            <header>
        <h1 className="w-full text-center m-0 p-0 text-3xl"> We all are Pokemons </h1>
            </header>
            <div className="pokemon search">
                <input type="text" placeholder="search Pokemon " value={search} onChange={(currdata)=> setsearch(currdata.target.value)} />
            </div>
            <div >
                <ul className=" grid grid-cols-4  gap-20 m-auto">
                    {
                         searchdata.map((currpokemon)=>{
                        return <Pokemonlist key={currpokemon.id} pokemondata={currpokemon}/>
                        })
                    }
                </ul>
            </div>
        </section>
        
        </>
    )
}