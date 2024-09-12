import React from 'react';
import { Chart } from 'react-google-charts';

const data = [
  ['Source', 'Percentage'],
  ['Vegetables', 40],
  ['Fruits', 25],
  ['Grains', 15],
  ['Leafy Vegetables', 10],
  ['Pulses', 5],
  ['Other Waste', 5],
];

const options = {
  title: null,
  is3D: true,
  legend: {
    textStyle: { fontSize: 12 }, // Font size for the legend text
  },
  pieSliceText: 'data',
  chartArea: { top: 0, left: 0, width: '100%', height: '100%' },
};

const PieChart = () => {
  return (
    <div className='w-full max-w-md mx-auto'>
      <h1 className='text-lg mb-4 pb-4 text-center'>Distribution Pie Chart</h1>
      <div className='w-full'>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width="100%"
          height="400px"
        />
      </div>
    </div>
  );
};

export default PieChart;
