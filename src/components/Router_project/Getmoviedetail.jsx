export const getmoviesdetails = async ({params}) => {
    console.log(params)
    const id = params.movieId;
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error; // Add this to properly handle errors
    }
}