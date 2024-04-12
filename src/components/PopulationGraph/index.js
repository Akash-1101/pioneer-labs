import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./index.css"

function PopulationGraph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
      const jsonData = await response.json();
      setData(jsonData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='population-container'>
      <h2>Population Data Graph</h2>
      <LineChart width={400} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Population" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default PopulationGraph;