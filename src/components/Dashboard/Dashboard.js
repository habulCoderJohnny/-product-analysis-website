import React from 'react';
import BarCharts from './Charts/BarCharts';
import LineCharts from './Charts/LineCharts';



const Dashboard = () => {
    return (
        <div>
            <h1>OUR BUSNESS STRATEGY</h1>
            <hr />
            <LineCharts></LineCharts>
            <br />
            <h1>OUR SHOPPING REPORT</h1>
            <hr />
            <BarCharts></BarCharts>

        </div>
    );
};

export default Dashboard;