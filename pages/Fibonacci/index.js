import React, { useState } from "react";

const SerieFibonacci = () => {

  const [salida, setSalida] = useState("");
  const [inputNumber, setInput] = useState("");

  const isNumber = /^[1-9][0-9]*$/;

  //con el evento click se maneja el cálculo por medio del reducer
  const handleClick = () => {
    //dispatch(actionCalculo());
  }; 

  return (
    <div>
      <h1>Serie de Fibonacci</h1>
      <div>
        <input
          type="number"
          onChange={ (e)=>setInput(e.target.value) }
          value={inputNumber}
        />
        <button
          className='btn btn-primary btn-sm'
          onClick={handleClick}
        >
          Mostrar serie
        </button>
      </div>
      <p>{salida}</p>
    </div>
  );
};

export default SerieFibonacci;
