import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const LineGraph = () => {
  const [series] = useState([{
    name: "Food Waste",
    data: [150, 200, 280, 350, 400, 450]
  }]);

  const [options] = useState({
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Required Food Waste per month',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} kg`
      }
    }
  });

  return (
    <ReactApexChart options={options} series={series} type="line" height={350} />
  );
};

export default LineGraph;