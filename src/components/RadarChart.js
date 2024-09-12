import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
    const [series] = useState([{
        name: 'Amount(%)',
        data: [60, 20, 70, 50, 80],
    }]);

    const [options] = useState({
        chart: {
            height: 350,
            type: 'radar',
        },
        title: {
            text: 'Basic Radar Chart',
        },
        yaxis: {
            max: 100,
            labels: {
                style: {
                    color: '#000',
                },
            },
        },
        xaxis: {
            categories: ['Protein', 'Fat', 'Carbohydrates', 'Minerals', 'Fiber'],
            labels: {
                style: {
                    colors: '#000',
                },
            },
        },
        fill: {
            opacity: 0.2,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['#FF4560'],
        },
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeColors: '#FF4560',
            strokeWidth: 2,
        },
    });

    return (
        <ReactApexChart options={options} series={series} type="radar" height={350} />
    );
};

export default ApexChart;
