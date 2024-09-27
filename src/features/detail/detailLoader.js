import { loader as routeLoader } from "../routeLoader";
import { checkStates } from "../utils";

export async function loader({ params }) {
    const check = checkStates();

   
    const movieUrl = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
    const trailerUrl = `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGM2MzFiOWU2NTRlZGQ0MDQ3Nzc0MDg1ZjNkZmNhNyIsIm5iZiI6MTcyMTY0MzAwOC45MjAwMDIsInN1YiI6IjY2OWEyZTFlYjM2MDgxYzFhODE0NTNmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ex-UjNnmXHQr950S5ZAmz-PcFwkGm5oQseVV_9NY6pI'

        }
    };

    try {
        const [movieResponse, trailerResponse] = await Promise.all([
            fetch(movieUrl, options),
            fetch(trailerUrl, options)
        ]);

        if (!movieResponse.ok || !trailerResponse.ok) {
            throw new Error("Failed to fetch data");
        }

        const movieResult = await movieResponse.json();
        const trailerResult = await trailerResponse.json();
        const trailerPath = trailerResult.results.length > 0 ? trailerResult.results[0].key : null;

        return {
            movie: movieResult,
            trailerPath: trailerPath ? `https://www.youtube.com/watch?v=${trailerPath}` : null,
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
