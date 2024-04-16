import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams()

  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then(res => res.json())
    .then(data => setMovie(data))
  }, [])


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      {movie ? (
          <>
            <h1>{movie.title}</h1>
            <p>Runtime: {movie.time}</p>
            <span>Genres: {movie.genres.map(genre => <span key={genre}>{genre}</span>)}</span>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
};

export default Movie;