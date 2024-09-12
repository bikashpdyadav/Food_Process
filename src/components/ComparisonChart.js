import React from 'react';

const ComparisonChart = () => {
  const data = [
    { nutrient: 'Protein', ourFeed: '60%', poultryStandard: '65%', dailyCow: '55%' },
    { nutrient: 'Carbohydrates', ourFeed: '70%', poultryStandard: '60%', dailyCow: '65%' },
    { nutrient: 'Fat', ourFeed: '20%', poultryStandard: '15%', dailyCow: '25%' },
    { nutrient: 'Minerals', ourFeed: '50%', poultryStandard: '50%', dailyCow: '50%' },
    { nutrient: 'Fiber', ourFeed: '80%', poultryStandard: '40%', dailyCow: '70%' }
  ];

  return (
    <div className="comparison-chart p-4 pt-0">
      <h2 className="text-center p-4 text-xl font-semibold">Comparison Chart</h2>
      <table className="table-auto border-collapse border border-gray-400 w-full text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Nutrient</th>
            <th className="border border-gray-300 p-2">Our Feed</th>
            <th className="border border-gray-300 p-2">Poultry Standard</th>
            <th className="border border-gray-300 p-2">Daily Cow Standard</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{row.nutrient}</td>
              <td className="border border-gray-300 p-2">{row.ourFeed}</td>
              <td className="border border-gray-300 p-2">{row.poultryStandard}</td>
              <td className="border border-gray-300 p-2">{row.dailyCow}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonChart;


// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const ComparisonChart = () => {
//   const [series] = useState([
//     {
//       name: 'Our Feed',
//       data: [60, 70, 20, 50, 80], // Data for 'Our Feed'
//     },
//     {
//       name: 'Poultry Standard',
//       data: [65, 60, 15, 50, 40], // Data for 'Poultry Standard'
//     },
//     {
//       name: 'Daily Cow Standard',
//       data: [55, 65, 25, 50, 70], // Data for 'Daily Cow Standard'
//     },
//   ]);

//   const [options] = useState({
//     chart: {
//       type: 'bar',
//       height: 350,
//     },
//     title: {
//       text: 'Nutrient Comparison Chart',
//       align: 'left',
//     },
//     xaxis: {
//       categories: ['Protein', 'Carbohydrates', 'Fat', 'Minerals', 'Fiber'], // Nutrients being compared
//     },
//     yaxis: {
//       min: 0,
//       max: 100,
//       tickAmount: 5,
//     },
//     tooltip: {
//       y: {
//         formatter: (val) => `${val}%`, // Show percentage in tooltip
//       },
//     },
//     fill: {
//       opacity: 0.1,
//     },
//     stroke: {
//       show: true,
//       width: 2,
//     },
//     markers: {
//       size: 4,
//     },
//   });

//   return (
//     <div className="comparison-chart m-4 p-4">
//       <ReactApexChart options={options} series={series} type="bar" height={350} />
//     </div>
//   );
// };

// export default ComparisonChart;
