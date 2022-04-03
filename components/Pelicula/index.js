import React from "react";
import styles from "./Pelicula.module.css";
import Estrellas from "../../components/Estrellas";

const url_peliculas = "https://image.tmdb.org/t/p/w500";

const Pelicula = ({ info, genero}) => {
  
  let fecha = new Date(info.release_date);

  return (
    <div className= {styles.Pelicula__container}>
      <h3 className= {styles.Pelicula__titulo}>
        {info.title + " (" + fecha.getFullYear() + ")"}
      </h3>
      <div className={styles.Pelicula__row}>
        <img
          className= {styles.Pelicula__movie}
          src={url_peliculas + info.poster_path}
          alt={info.title}
        />

        <div className= {styles.Pelicula__column}>
          <p className={styles.Pelicula__overview}>{info.overview}</p>

          <p>
            <b>Titulo: </b>
            {info.original_title}
          </p>

          <div className='contenedor-estrella'>
            <p>
              <b>Calificación: </b> <span>{info.vote_average}</span>
            </p>

            <Estrellas key='estrellas' estrellas={info.vote_average} />
          </div>

          <p>
            <b>Genero: </b> <span>{genero}</span>
          </p>

          <p>
            <b>Fecha de realización: </b>{" "}
            <span>{info.release_date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pelicula;
