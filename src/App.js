import React from 'react';
import MovieContextProvider from './contexts/MovieContext';
import NavBar from './components/Navbar';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <NavBar />
        <MovieList />
        <MovieForm />
      </MovieContextProvider>
    </div>
  );
}

export default App;
