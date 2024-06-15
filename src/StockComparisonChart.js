import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const StockComparisonChart = () => {
  const labels = stockComparison.map((stock) => stock.name);
  const values = stockComparison.map((stock) => stock.value);
  const colors = ['#064FF0', '#FF3030']; // Colores para diferenciar las dos bolsas

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Stock Comparison',
        data: values,
        backgroundColor: colors,
        borderColor: colors,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        text: 'Comparison Between Mexican and US Stock Market',
      },
    },
  };

  return (
    <div className="dataCard stockComparisonCard">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default StockComparisonChart;
