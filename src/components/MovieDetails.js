import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext'

const MovieDetails = (props) => {
  const { dispatch } = useContext(MovieContext)
  return (
    <li onClick={() => dispatch({ type: "REMOVE_MOVIE", id: props.movie.id })}>
      <div className="title">{props.movie.title}</div>
      <div className="genre">{props.movie.genre}</div>
    </li>
  )
}

export default MovieDetails