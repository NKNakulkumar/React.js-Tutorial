import axios from "axios";

const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});

// get method 
export const getPost=(limit=20)=>{
    return api.get(`/posts?_limit=${limit}`);  // Use the limit parameter in the query
}
// delete method 

export const deletePost=(id)=>{
    return api.delete(`/posts/${id}`)
}
// post method 

export const postData=(post)=>{
    return api.post("/posts",post);
}

//put method
// ... existing code ...
export const updateData = (id, post) => {
    return api.put(`/posts/${id}`, post);  // Changed from post to put and added return
}