import './App.css';
import { Routes, Route } from 'react-router-dom';
import SampleMovies from './SampleMovies';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import NavBar  from './components/NavBar';

function App() {
  return (
    <>
      <Filter />
      <NavBar />
      <MovieList />
      <SampleMovies  />
    </>
  );
}

export default App;