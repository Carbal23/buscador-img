import React, { useEffect, useState } from "react";
import { Formulario } from "./components/Formulario";
import { ListadoImg } from "./components/ListadoImg";

function App() {
  const [busquedas, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busquedas.length === 0) return;
      const imgPorPagina = 30;
      const key = "36308282-4bbc99676f908b612fd0c8be0";
      const url = `https://pixabay.com/api/?key=${key}&q=${busquedas}&per_page=${imgPorPagina}&page=${paginaActual}`;

      const peticion = await fetch(url);
      const resultado = await peticion.json();
      console.log(resultado);
      setImagenes(resultado.hits);

      setTotalPaginas(Math.ceil(resultado.totalHits / imgPorPagina));

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({behavior:'smooth'});
    };

    consultarApi();
  }, [busquedas, paginaActual]);

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    if (paginaActual === 1) return;
    setPaginaActual(nuevaPaginaActual);
  };

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;
    if (paginaActual === totalPaginas) return;
    setPaginaActual(nuevaPaginaActual);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Formulario setBusqueda={setBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListadoImg imagenes={imagenes} />
        {paginaActual === 1 ? null : (
          <button className="bbtn btn-info mr-1" onClick={paginaAnterior}>
            &laquo; Anterior
          </button>
        )}
        {paginaActual === totalPaginas ? null : (
          <button className="bbtn btn-info" onClick={paginaSiguiente}>
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
