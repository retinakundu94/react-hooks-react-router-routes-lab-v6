import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/ExtraCard";

function Actors() {
  const [actors, setActors] = useState([])


  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(res => res.json())
    .then(data => setActors(data))
    .catch(error => console.error(error))
  }, [])

  const actorsArr = actors.map(actor => <Card key={actor.id} name={actor.name} movies={actor.movies} />)

  return (
    <div>
        <NavBar />
        <h1>Actors Page</h1>
        {actors.map(actor => (
            <article key={actor.id}>
                <h2>{actor.name}</h2>
                <ul>
                    {actor.movies.map(movie => (
                        <li key={movie}>{movie}</li>
                    ))}
                </ul>
            </article>
        ))}
    </div>
);
}

export default Actors;