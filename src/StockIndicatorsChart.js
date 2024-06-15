import React from 'react';
import { Bar } from 'react-chartjs-2';
import sourceData from './data/sourceData.json';

const StockIndicatorsChart = () => {
  const labels = sourceData.map((data) => data.label);
  const values = sourceData.map((data) => data.value);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Stock Indicators',
        data: values,
        backgroundColor: '#FF3030',
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        text: 'Most Important Stock Indicators',
      },
    },
  };

  return (
    <div className="dataCard stockIndicatorsCard">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default StockIndicatorsChart;
