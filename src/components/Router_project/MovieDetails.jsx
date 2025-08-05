import { useLoaderData } from "react-router-dom"

export const MovieDetails=()=>{
// const params = useParams();
// console.log(params);
const moviedata = useLoaderData();
console.log(moviedata)

const {Type,Year,Poster,imdbID,Title}=moviedata;
return(
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={imdbID} />
        </div> 
        <div className="ticket-container">
          <div className="ticket__content">
            <p>Year:{Year}</p>
            <p>type:{Type}</p>
              <button className="ticket__buy-btn">Watch now</button>
            
          </div>
        </div>
      </div>
    </li>
    )
}




















// new tarika get movie details