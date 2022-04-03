import React from "react";
import estrellaOn from "../../Assets/Images/Star3.png";
import estrellaOff from "../../Assets/Images/Star5.png";
import Image from 'next/image';
import styles from './Estrellas.module.css'

const Estrellas = (props) => {

  const stars = props.estrellas / 2;

  const itemsEstrellas = [];

  for (let index = 1; index <= 5; index++) {
    if (index - stars < 1 && index - stars > 0) {
      itemsEstrellas.push(

        <Image
          id={index}
          key={index}
          src={estrellaOn}
          width={`${10 * (index - stars)}px`}
          height='10'
          alt={index}
          className={styles.Estrellas__clip}
        />
      );

    } else if (stars >= index) {
      itemsEstrellas.push(
        <Image
          id={index}
          key={index}
          src={estrellaOn}
          width='10'
          height='10'
          alt={index}
        />
      );
    }
    else {
      itemsEstrellas.push(
        <Image
          id={index}
          key={index}
          src={estrellaOff}
          width='10'
          height='10'
          alt={index}
        />
      );
    }

  }

  return <div>{itemsEstrellas}</div>;
};

export default Estrellas;
