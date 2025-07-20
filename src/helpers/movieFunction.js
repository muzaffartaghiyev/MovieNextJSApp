const API_KEY = process.env.TMDB_KEY


export const getMovies=async(type)=>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`)

    const {results} = await res.json()

    return results
}