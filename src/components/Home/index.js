import React from 'react';
import PopulationGraph from '../PopulationGraph';
import CryptoPrices from "../CryptoPrices"
import "./index.css"

function Home() {
  return (
    <div className='home-main-container'>
      <PopulationGraph/>
      <CryptoPrices />
    </div>
  );
}

export default Home;