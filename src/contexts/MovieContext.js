import React, { createContext, useReducer, useEffect } from 'react';
import { movieReducer } from '../reducers/movieReducer';

export const MovieContext = createContext()

const MovieContextProvider = (props) => {

  const [movies, dispatch] = useReducer(movieReducer, [], () => {
    const localStorageMovies = localStorage.getItem('movies')
    return localStorageMovies ? JSON.parse(localStorageMovies) : []
  })

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies))
  }, [movies])

  return (
    <MovieContext.Provider value={{movies, dispatch}}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider