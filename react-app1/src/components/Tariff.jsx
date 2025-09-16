import React from 'react';
import './Tariff.css';

function Tariff() {
  return (
    <div className="tariff-container">
      <h1 className="tariff-title">Gold</h1>
      <ul>
        <li>Price: $7000</li>
      </ul>
      <h1 className="tariff-title">Features</h1>
      <ul>
        <li>Gold began the week on a bullish note, hitting new all-time highs above $3650 an ounce.</li>
        <li>Market sentiment is driven by expectations that the Federal Reserve may cut interest rates at its September meeting, as indicated by recent weak US labor market data.</li>
        <li>Political instability and central bank demand are also contributing to the bullish trend.</li>
      </ul>
    </div>
  );
}

export default Tariff;
