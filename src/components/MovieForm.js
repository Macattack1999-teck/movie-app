import React, { useContext, useState } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const MovieForm = () => {
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const { addMovie } = useContext(MovieContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    addMovie(title, genre)
    setTitle('')
    setGenre('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Movie Genre"
        value={genre}
        onChange={(event) => setGenre(event.target.value)}
      />

      <input type="submit" value="Add Movie" />
    </form>
  )
}

export default MovieForm