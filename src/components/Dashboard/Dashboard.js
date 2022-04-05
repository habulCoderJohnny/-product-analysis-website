import React from 'react';
import BarCharts from './Charts/BarCharts';
import LineCharts from './Charts/LineCharts';



const Dashboard = () => {
    return (
        <div>
            <h1 className='py-2 text-red-500 font-bold'>OUR BUSNESS STRATEGY</h1>
            <hr />
            <div className='flex justify-evenly py-8'>
            <LineCharts></LineCharts>
            <BarCharts></BarCharts>
            </div>
         
        </div>
    );
};

export default Dashboard;