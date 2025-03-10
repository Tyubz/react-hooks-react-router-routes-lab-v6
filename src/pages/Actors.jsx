import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const actors = [
  { name: 'Actor 1', movies: ['Movie A', 'Movie B', 'Movie C'] },
  { name: 'Actor 2', movies: ['Movie D', 'Movie E'] },
  { name: 'Actor 3', movies: ['Movie F', 'Movie G', 'Movie H'] },
];

function Actors() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
