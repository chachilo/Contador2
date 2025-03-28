// import React, { useState } from 'react';

// function Contador() {
//   const [contador, setContador] = useState(0);

//   const handleClick = () => {
//     const nuevoContador = contador + 1;
//     setContador(nuevoContador);
//     console.log('Clic número:', nuevoContador);

//     if (nuevoContador === 4) {
//       console.log('¡Cantidad máxima de 4 clics alcanzada!');
//     }
//   };

//   return (
//     <div>
//       <h1>Total de clics: {contador}</h1>
//       <button onClick={handleClick}>Clic aquí</button>
//     </div>
//   );
// }

// export default Contador;

import React, { useState } from 'react';
import ReactGA from 'react-ga4';

function Contador() {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    const nuevoContador = contador + 1;
    setContador(nuevoContador);
    console.log('Clic número:', nuevoContador);

    ReactGA.event({
      category: 'Contador',
      action: 'Clic',
      label: `Clic número: ${nuevoContador}`,
      value: nuevoContador,
    });

    if (nuevoContador === 4) {
      console.log('¡Cantidad máxima de 4 clics alcanzada!');
      ReactGA.event({
        category: 'Contador',
        action: 'Máximo clics alcanzado',
        label: 'Máximo 4 clics',
      });
    }
  };

  return (
    <div>
      <h1>Total de clics: {contador}</h1>
      <button onClick={handleClick}>Clic aquí</button>
    </div>
  );
}

export default Contador;