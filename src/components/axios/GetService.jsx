import axios from "axios";

const api = axios.create({
    baseURL:"https://www.omdbapi.com/",
})
// create a get request function .
export const getmovie=()=>{
    return(
api.get("?i=tt3896198&apikey=674a832d&s=Guardians%20of%20the%20Galaxy%20Vol.%202&page=1")
    )
}
