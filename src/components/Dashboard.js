import React from 'react';
import BarChart from './BarChart';
import LineGraph from './LineGraph';
import ScatterChart from './ScatterChart';
import PieChart from './PieChart';

const Dashboard = () => {
  return (
    <div
      id="dashboard"
      className='flex flex-col items-center justify-center pt-24'
      style={{ paddingTop: '100px' }}
    >
      <h1 className='text-center my-4 font-bold text-3xl md:text-4xl'>
        DASHBOARD
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-8 pt-8'>
        <BarChart />
        <PieChart />
        <LineGraph />
        <ScatterChart />
      </div>
    </div>
  );
};

export default Dashboard;
