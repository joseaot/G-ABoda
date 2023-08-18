import { useEffect } from "react";
import sugar1 from "./audio/sugar.mp3";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";

function App() {
  useEffect(() => {
    // Reproducir automáticamente la canción cuando se monta el componente
    document.getElementById('musica1').play();
  }, []);

  return (
    <div>
      <audio id="musica1" autoPlay loop>
        <source src={sugar1} type="audio/mpeg"/>
      </audio>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;