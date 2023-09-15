import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import "./App.css";

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
        <img src={logo} className="App-logo" alt="logo" />
        {saludo ? (
          <p>Hello from {saludo}</p>
        ) : (
          <p>Loading...</p>
        )}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
