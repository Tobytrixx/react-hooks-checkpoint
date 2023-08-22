import './App.css';
import { Routes } from 'react-router-dom';
import SampleMovies from './SampleMovies';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import EOT from './components/EoT';

function App() {
  return (
    <>
      <Filter />
      <MovieList />
      <SampleMovies  />
    </>
  );
}

export default App;