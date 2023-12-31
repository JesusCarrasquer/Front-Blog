import React, {useCallback, useEffect, useState } from "react";
import "./App.css";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { Route, Routes, useNavigate } from "react-router";
import NoMatch from "../pages/NoMatch";

function App() {

  const [saludo,setSaludo] = useState('');
  useEffect(() => {
    fetch('http://localhost:8080/posts')
    .then(response => response.text())
    .then(text => setSaludo(text))
    .catch(error => console.error(error));
  },[setSaludo]);

  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
}, []);

const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <span className="selected" onClick={() => {navigate('/')}}>Inicio</span>
        <span onClick={() => {navigate('/About')}}>Sobre mi</span>
        <span onClick={() => {navigate('/Blog')}}>Blog</span>
        <span>{saludo ? (
          <span className="connected">Conexión correcta</span>
        ) : (
          <span className="connecting">Cargando...</span>
        )}</span>
      </header>
      <Routes>
        <Route path="*" element={<NoMatch/>} />
        <Route path="/" element={<NoMatch/>} />
        <Route path="/About" element={<NoMatch/>} />
        <Route path="/Blog" element={<NoMatch/>} />
      </Routes>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              "particles": {
                "number": {
                  "value": 150,
                  "density": {
                    "enable": true,
                    "value_area": 789.1476416322727
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.48927153781200905,
                  "random": false,
                  "anim": {
                    "enable": true,
                    "speed": 0.2,
                    "opacity_min": 0,
                    "sync": false
                  }
                },
                "size": {
                  "value": 2,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": false,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 0.2,
                  "direction": "none",
                  "random": true,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 83.91608391608392,
                    "size": 1,
                    "duration": 3,
                    "opacity": 1,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}
        />        
    </div>
    
  );
}

export default App;
