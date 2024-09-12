import React from 'react';
import BarChart from './BarChart';
import LineGraph from './LineGraph';
import PieChart from './PieChart';
import StackedChart from './StackedChart';
import RadarChart from './RadarChart';
import ComparisonChart from './ComparisonChart';

const Dashboard = () => {
  return (
    <div
      id="dashboard"
      className='flex flex-col items-center justify-center pt-24 pb-12 bg-gray-50 min-h-screen'
      style={{ paddingTop: '100px' }}
    >
      <h1 className='text-center my-8 font-bold text-4xl md:text-5xl text-gray-800'>
        Dashboard
      </h1>

      <div className='flex flex-wrap justify-center gap-8 p-4'>
        <div className='bg-white shadow-md rounded-lg p-4 flex-1 min-w-[300px]'>
          <LineGraph />
        </div>
        <div className='bg-white shadow-md rounded-lg p-4 flex-1 min-w-[300px]'>
          <PieChart />
        </div>
        <div className='bg-white shadow-md rounded-lg p-4 flex-1 min-w-[300px]'>
          <RadarChart />
        </div>
        <div className='bg-white shadow-md rounded-lg p-4 flex-1 min-w-[300px]'>
          <BarChart />
        </div>
        <div className='bg-white shadow-md rounded-lg p-4 flex-1 min-w-[300px]'>
          <StackedChart />
        </div>
      </div>

      <div className='bg-white shadow-md rounded-lg m-8 p-4'>
        <ComparisonChart />
      </div>
    </div>
  );
};

export default Dashboard;
