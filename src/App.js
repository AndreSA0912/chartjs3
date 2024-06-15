import React from 'react';
import ParityChart from './ParityChart';
import StockIndicatorsChart from './StockIndicatorsChart';
import StockComparisonChart from './StockComparisonChart';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ParityChart />
      <StockIndicatorsChart />
      <StockComparisonChart />
    </div>
  );
};

export default App;
