import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Calculo from "./Components/Calculo";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

  const [isContadorVisible, setIsContadorVisible] = useState(false);

  const handleShowContador = () => {
    setIsContadorVisible(true);
  };

  const handleHideContador = () => {
    setIsContadorVisible(false);
  };

  return (
    <Router>
    <header>
      <nav>
        {/* Agrega la clase "nav-link" a los enlaces y controla su visibilidad con los estados */}
        <Link
          to='/Calculo'
          className={`nav-link ${isContadorVisible ? 'active' : ''}`}
          onClick={handleShowContador}
        >
          Calculo de Sueldo
        </Link>
        <Link
          to='/Login'
          className={`nav-link ${!isContadorVisible ? 'active' : ''}`}
          onClick={handleHideContador}
        >
       Login
        </Link>
      </nav>
    </header>
    


    <Routes>
      <Route path='/Calculo' element={<Calculo />} />
      {/* Si `isContadorVisible` es false, muestra el contenido */}
      {!isContadorVisible && (
         <Route path='/Login' element={<Login />} />     
      )}
    </Routes>
  </Router>
  );
}

export default App;
