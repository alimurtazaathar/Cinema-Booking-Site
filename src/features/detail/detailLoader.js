
import {loader as routeLoader} from "../routeLoader"

export async function loader({params})
{
        routeLoader();
        const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGM2MzFiOWU2NTRlZGQ0MDQ3Nzc0MDg1ZjNkZmNhNyIsIm5iZiI6MTcyMTY0MzAwOC45MjAwMDIsInN1YiI6IjY2OWEyZTFlYjM2MDgxYzFhODE0NTNmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ex-UjNnmXHQr950S5ZAmz-PcFwkGm5oQseVV_9NY6pI'
          }
        };
      
        try {
          const response = await fetch(url, options);
          const result = await response.json();
           console.log(result)
      
          return result;
        } catch (error) {
          return null;
        }




}
