import { v4 as uuidv4 } from 'uuid'

export const movieReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          title: action.movie.title,
          genre: action.movie.genre,
          id: uuidv4()
        }
      ]
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id)
    default:
      return state
  }
}