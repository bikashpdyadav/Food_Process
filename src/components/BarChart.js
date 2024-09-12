import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
    const [series] = useState([{
        name: '',
        data: [50, 75, 110, 140, 180, 220]
    }]);

    const [options] = useState({
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                borderRadiusApplication: 'end',
                horizontal: false,
            },
        },
        title: {
            text: 'Monthly Carbon Footprint Reduction',
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        tooltip: {
            y: {
                formatter: (val) => `${val} Kg CO<sub>2</sub>`
            }
        }
    });

    return (
        <ReactApexChart options={options} series={series} type="bar" height={350} />
    );
};

export default ApexChart;
