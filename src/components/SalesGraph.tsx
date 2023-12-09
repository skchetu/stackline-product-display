import React from 'react';

// Components
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';

// Register necessary components from Chart.js library
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

// Define array of moth labels for x-axis
export const MONTH_LABELS: string[] = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

interface SalesGraphProps {
  labels: string[];
  retailData: number[];
  wholesaleData: number[];
}

const SalesGraph: React.FC<SalesGraphProps> = ({ labels, retailData, wholesaleData }) => {
  // Define line graph data with the given sales data
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Retail Sales',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(96, 165, 240,1)',
        borderColor: 'rgba(96, 165, 240,1)',
        borderWidth: 2,
        data: retailData,
      },
      {
        label: 'Wholesale Sales',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(157, 165, 189,1)',
        borderColor: 'rgba(157, 165, 189,1)',
        borderWidth: 2,
        data: wholesaleData,
      },
    ],
  };

  // Set graph options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        display: false,
      },
      y: {
        grid: {
          display: false,
        },
        display: false,
      },
    },
    pointStyle: false,
  };

  return (
    <div>
      <div className="line-graph">
        <Line data={data} options={options} />
      </div>
      <div className="horizontal-line"></div>
      <div className="month-labels">
        {MONTH_LABELS.map((month, index) => (
          <span key={index}>{month}</span>
        ))}
      </div>
    </div>
  );
};

export default SalesGraph;
