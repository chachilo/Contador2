import React from 'react';
import ReactGA from 'react-ga4';
import Contador from './Contador'; // Asegúrate de que la ruta sea correcta

const TRACKING_ID = "G-CT5R4HT1FB"; // Reemplaza con tu ID de medición

function App() {
  ReactGA.initialize(TRACKING_ID);

  return (
    <div>
      <Contador />
    </div>
  );
}

export default App;
