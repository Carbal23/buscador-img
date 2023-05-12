import React, { useState } from "react";
import { Error } from "./Error";

export const Formulario = ({setBusqueda}) => {
  const [inputValue, setInputValue] = useState("");
  const [validation, setValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      setValidation(true);
      return;
    }
    setValidation(false);
    setBusqueda(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen, ej: futbol o cafe"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="form-group col md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="buscar"
          />
        </div>
      </div>
      {validation ? <Error msg="Agregue un termino de busqueda"/> : null}
    </form>
  );
};
