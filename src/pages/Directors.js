import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [directors, setDirectors] = useState([])

  useEffect(()=> {
    fetch("http://localhost:4000/directors")
    .then(res=> res.json())
    .then(data => setDirectors(data))
  }, [])

  const mappedDirectors = directors.map(director => {
    return (
      <article>
        <h2>{director.name}</h2>
        <ul>{director.movies.map(movie => (
            <li key={movie}>{movie}</li>
          ))}</ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {mappedDirectors}
      </main>
    </>
  );
};

export default Directors;