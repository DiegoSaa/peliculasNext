import React, { useEffect, useState } from "react";
import Pelicula from "../components/Pelicula";
import lupa from "../Assets/Images/Vector.png";
import Image from 'next/image';

import styles from './Search.module.css';


const Search = () => {

  const [movies, setMovies] = useState([]);
  const [genres, setGenres ] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    window.fetch('/api/peliculas/data')
    .then((res) => res.json())
    .then( data => {
      setMovies(data.results);
      setGenres(data.genres.map(item=> ({...item, active: false})));
    })
  }, []);
  

  return (
    <div>
      <h1>Películas</h1>
      <div className={styles.Movies__container}>
        <input
          className= {styles.Input__field}
          onChange={(e)=> setSearchInput(e.target.value)}
          value={searchInput}
        />
        <span className='btn btn-secundary btn-sm'>
          <Image src={lupa} alt='lupa' />
        </span>
      </div>

      <div className= {styles.Search__container}>
          {movies === undefined ||
            (movies
              .filter(pelicula=> pelicula.title.toLowerCase().includes(searchInput.toLowerCase()))
              .map((pelicula) => (
                <Pelicula
                  id={pelicula.id}
                  key={pelicula.id}
                  titulo={pelicula.title}
                  info={pelicula}
                  genero={"accion"}
                />
              )))}
      </div>
    </div>
  );
}

export default Search;
