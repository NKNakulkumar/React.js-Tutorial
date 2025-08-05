import axios from "axios";

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
    

})

// to fetch the data

export const fetchposts=async(pageno)=>{

    try {
        const res = await api.get(`/posts?_start=${pageno}&_limit=3`)
        return res.status===200?res.data:[] 
    } catch (error) {
        console.log(error)
        return []
    }
    
}
// fetch Individual 
export const postInvData = async (id) => {
    try {
        const res = await api.get(`/posts/${id}`)  
        return res.status === 200 ? res.data : [] 
    } catch (error) {
        console.log(error)
        return []  
    }
}

// INfinite scrolling 
export const fetchusers=async({pageparam=10})=>{
try {
    // const res = axios.get(`https://picsum.photos/v2/list?page=1&limit=200`)
    const res = await axios.get(`https://picsum.photos/v2/list?page=1&limit=${pageparam}`)
    return res.status === 200 ? res.data : [] 

} catch (error) {
    console.log(error)
}
}