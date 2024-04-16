import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";


function Home() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(res => res.json())
    .then(data => setMovies(data))
  }, [])

  const mappedMovies = movies.map( movie => {
    return(<MovieCard movies={movies} movie={movie} setMovies={setMovies}/>)
  })


  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        {mappedMovies}
      </main>
    </>
  );
};

export default Home;