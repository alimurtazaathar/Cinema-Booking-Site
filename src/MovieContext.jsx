import { createContext, useState } from 'react';

export const MovieContext = createContext();
export const MovieDispatcher=createContext();

export const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState({});
    // console.log(movie)
    return (
        <MovieContext.Provider value={{ movie }}>
            <MovieDispatcher.Provider value={{setMovie}}>
            {children}
            </MovieDispatcher.Provider>
        </MovieContext.Provider>
    );
};
