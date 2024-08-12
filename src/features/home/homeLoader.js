
export async function loader()
{
    const url1 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2024&sort_by=popularity.desc';
    const url2 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2014&sort_by=popularity.desc';
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGM2MzFiOWU2NTRlZGQ0MDQ3Nzc0MDg1ZjNkZmNhNyIsIm5iZiI6MTcyMTUwMzQ3My4yNzg4NDIsInN1YiI6IjY2OWEyZTFlYjM2MDgxYzFhODE0NTNmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.253zY1ja46Y3Auft-YVt_Q3KUoI9qjbobSdVOiBfoC0'
        }
      };
    try {
            const [response1, response2] = await Promise.all([
              fetch(url1, options),
              fetch(url2, options) // Fixed URL here
            ]);
        
            const result1 = await response1.json();
            const result2 = await response2.json();
        
            return { result1: result1.results, result2: result2.results };
    } catch (error) {
        // console.error(error);
        return null;
    }
}

