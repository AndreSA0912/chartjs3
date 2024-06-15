import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { defaults } from 'chart.js';
import revenueData from './data/revenueData.json';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const ParityChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const data = revenueData;

        
        const labels = data.map((item) => item.label);
        const values = data.map((item) => item.value);

        const chart = {
          labels: labels,
          datasets: [
            {
              label: 'Parity MXN/USD',
              data: values,
              fill: false,
              borderColor: '#064FF0',
              tension: 0.1,
            },
          ],
        };

        setChartData(chart);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dataCard parityCard">
      <Line data={chartData} />
    </div>
  );
};

export default ParityChart;
