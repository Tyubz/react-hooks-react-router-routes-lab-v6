import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const directors = [
  { name: 'Director 1', movies: ['Movie A', 'Movie B', 'Movie C'] },
  { name: 'Director 2', movies: ['Movie D', 'Movie E'] },
  { name: 'Director 3', movies: ['Movie F', 'Movie G', 'Movie H'] },
];

function Directors() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
