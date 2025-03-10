import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movies = [
  { id: 1, title: 'Movie 1', time: '120 min', genres: ['Action', 'Drama'] },
  { id: 2, title: 'Movie 2', time: '90 min', genres: ['Comedy'] },
  { id: 3, title: 'Movie 3', time: '110 min', genres: ['Horror', 'Thriller'] },
];

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = () => {
      const foundMovie = movies.find(movie => movie.id === parseInt(id));
      setMovie(foundMovie);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre} </span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
