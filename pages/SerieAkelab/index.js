import React, {useState} from "react";

const SerieAkelab = () => {

  const [inputNumber, setinput] = useState("");
  const [salida, setSalida] = useState("");

  //con el evento click se maneja el cálculo por medio del reducer
  const handleClick = (e) => {
    //dispatch(actionCalculo());
  };

  return (
    <div>
      <h1>Secuencia AKELAB</h1>
      <input type="number" onChange={ (e) => setinput(e.target.value)} value={inputNumber}/>
      <button className=' btn btn-primary btn-sm' onClick={handleClick}>
        Mostrar serie
      </button>
      <p>{salida}</p>
    </div>
  );
};

export default SerieAkelab;
