import React, { useState } from 'react';

const MegaSena = () => {
  const [numeros, setNumeros] = useState([]);

  const gerarNumeros = () => {
    const numerosGerados = [];
    
    while(numerosGerados.length < 7) {
      const numero = Math.floor(Math.random() * 60) + 1;
      
      if (!numerosGerados.includes(numero)) {
        numerosGerados.push(numero);
      }
    }

    setNumeros(numerosGerados.sort((a, b) => a - b));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={gerarNumeros}>Gerar Números</button>
      
      {numeros.length > 0 && (
        <div>
          <h3>Seus números:</h3>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            padding: 0,
            gap: '8px'
          }}>
            {numeros.map((numero, index) => (
              <div key={index} style={{
                padding: '4px 8px',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px'
              }}>
                {numero}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaSena;