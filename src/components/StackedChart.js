import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const StackedChart = () => {
  const [series] = useState([
    {
      name: 'Grains',
      data: [30, 60, 10, null, 20],
    },
    {
      name: 'Vegetables',
      data: [null, 25, null, null, 50],
    },
    {
      name: 'Vegetable Peels',
      data: [20, null, null, null, null],
    },
    {
      name: 'Pulses',
      data: [50, null, null, null, null],
    },
    {
      name: 'Fruits',
      data: [null, 15, 40, 30, null],
    },
    {
      name: 'Other Plant-Based Waste',
      data: [null, null, 50, null, null],
    },
    {
      name: 'Other Waste',
      data: [null, null, null, 20, 30],
    },
  ]);

  const [options] = useState({
    chart: {
      type: 'bar',
      height: 350,
      stacked: true, // Enable stacking
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    title: {
      text: 'Stacked Bar Chart',
    },
    xaxis: {
      categories: ['Protein', 'Carbohydrates', 'Fat', 'Minerals', 'Fiber'],
    },
    yaxis: {
      title: {
        text: 'Obtain Source(%)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`,
      },
    },
  });

  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  );
};

export default StackedChart;
