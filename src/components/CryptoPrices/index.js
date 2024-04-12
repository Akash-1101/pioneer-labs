// CryptoPrices.js
import React, { useState, useEffect } from 'react';
import './index.css';

function CryptoPrices() {
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const data = await response.json();
      setPrices(data.bpi);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

  return (
    <div className="crypto-container">
      <h2>Cryptocurrency Prices</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {prices && (
        <div className="crypto-cards">
          {Object.keys(prices).map((currency, index) => (
            <div key={index} className="crypto-card">
              <h3>{currency}</h3>
              <p>{prices[currency].rate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CryptoPrices;
