import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext'

const MovieDetails = (props) => {
  const { removeMovie } = useContext(MovieContext)
  return (
    <li onClick={() => removeMovie(props.movie.id)}>
      <div className="title">{props.movie.title}</div>
      <div className="genre">{props.movie.genre}</div>
    </li>
  )
}

export default MovieDetails