export const Pokemonlist=({pokemondata})=>{
    return <li className="card">
        <figure>
            <img src={pokemondata.sprites.other.dream_world.front_default} alt={pokemondata.name} />
        </figure>
        <h1 className="mt-4 font-bold">{pokemondata.name}</h1>
        <div className="bg-purple-500 font-bold text-white rounded-xl py-2">
            <p>
                {
                    pokemondata.types.map((currtype)=>currtype.type.name).join(", ")
                }
            </p>
        </div>
        <div>
            <p> <span>Height :</span>{pokemondata.height}
            </p>
        </div>
        <div>
            <p> <span>weight :</span>{pokemondata.weight}
            </p>
        </div>
        <div>
            <p> <span>Speed :</span>{pokemondata.stats[1].base_stat}
            </p>
        </div>
        <div className="pokimon abilities">
            <p>
                {
                pokemondata.abilities.map((abilityinfo)=>abilityinfo.ability
                .name).slice(0,1).join(", ")
                }
                <span>Abilities: </span>
            </p>
        </div>
    </li>
}