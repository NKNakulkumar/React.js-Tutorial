export const getmoviesdata = async () => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error; // Add this to properly handle errors
    }
}