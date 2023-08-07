import React, { useState } from 'react';

function Calculo() {
  const [sueldo, setSueldo] = useState(0);
  const [aumento, setAumento] = useState(0);
  const [descuento, setDescuento] = useState(0);

  // Función para manejar el evento onChange del input del sueldo
  const handleSueldoChange = (event) => {
    setSueldo(parseFloat(event.target.value));
  };

  // Función para manejar el evento onChange del input del aumento salarial
  const handleAumentoChange = (event) => {
    setAumento(parseFloat(event.target.value));
  };

  // Función para manejar el evento onChange del input del descuento variable
  const handleDescuentoChange = (event) => {
    setDescuento(parseFloat(event.target.value));
  };

  // Función para calcular el IGSS (4.83% del sueldo)
  const calcularIGSS = () => {
    return sueldo * 0.0483;
  };

  // Función para calcular el total a pagar (sueldo + aumento - descuento - IGSS)
  const calcularTotalAPagar = () => {
    const igss = calcularIGSS();
    return sueldo + aumento - descuento - igss;
  };

  return (
    <div className="container">
      <form className="card">
        <h2>Ingrese El Sueldo:</h2>
        <br />
        <input type="number" value={sueldo} onChange={handleSueldoChange} />
        <h2>Ingrese El Aumento Salarial:</h2>
        <br />
        <input type="number" value={aumento} onChange={handleAumentoChange} />
        <h2>Ingrese El Descuento Variable:</h2>
        <br />
        <input type="number" value={descuento} onChange={handleDescuentoChange} />
      </form>

    
      <div >
        <h2>Resultados:</h2>
        <h3>IGSS (4.83%): {calcularIGSS()}</h3>
        <h3>Total a Pagar: {calcularTotalAPagar()}</h3>
      </div>
    </div>
  );
}

export default Calculo;



