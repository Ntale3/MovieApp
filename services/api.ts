

export const TMDB_CONFIG={
    BASE_URL:'https://api.themoviedb.org/3/',
    API_KEY:process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    header:{
        accept:'application/json',
        Authorization:`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

const fetchPopularMovies=async({query}:{query:string})=>{
    const endpoint=query?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`    
                        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`

    const response=await fetch(endpoint,{
        method:'GET',
        headers:TMDB_CONFIG.header
    });
    if(!response.ok){
        //@ts-ignore
        throw new Error("Failed to fetch movies",response.statusText);
        
    }
    const data=await response.json();

    return data.results

}
export default fetchPopularMovies;

export async function fetchMovieDetails(movie_id:string):Promise<MovieDetails>{
    try{
        const response=await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movie_id}?api_key=${TMDB_CONFIG.API_KEY}`,{
            method:'GET',
            headers:TMDB_CONFIG.header
        });
        
        if(!response.ok){
            throw new Error('Failed to fetch movies');
        }
        const data= await response.json();
        return data;
        
        

    }catch(error){
        console.log(error)
        throw error;
    }
}




