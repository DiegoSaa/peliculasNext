import React, { useEffect, useState } from "react";
import Pelicula from "../../components/Pelicula";
import lupa from "../../Assets/Images/Vector.png";
import Image from 'next/image';

import styles from './Search.module.css';


const Search = () => {

  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    window.fetch('/api/peliculas/data')
    .then((res) => res.json())
    .then( data => setMovies(data.results))
  }, []);
  

  return (
    <div>
      <h1>Películas</h1>
      <div className="Movies__container">
        <input
          className= {styles.Search__input}
          onChange={(e)=> setSearchInput(e.target.value)}
          value={searchInput}
        />
        <button className='btn btn-secundary btn-sm' onClick={()=>null}>
          <Image src={lupa} alt='lupa' />
        </button>
        <span> Ordenar</span>
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
