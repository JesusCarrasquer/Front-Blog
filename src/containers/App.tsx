import React, {useEffect, useState } from "react";
import "./App.css";
import Particles from 'react-particles-js';

function App() {

  const [saludo,setSaludo] = useState('');
  useEffect(() => {
    fetch('http://localhost:8080/posts')
    .then(response => response.text())
    .then(text => setSaludo(text))
    .catch(error => console.error(error));
  },[setSaludo]);

  return (
    <div className="App">
      <header className="App-header">
        <span>Inicio</span>
        <span>Sobre mi</span>
        <span>Blog</span>
        <span>{saludo ? (
          <span className="connected">Conexión correcta</span>
        ) : (
          <span className="connecting">Cargando...</span>
        )}</span>
      </header>
    </div>
  );
}

export default App;
