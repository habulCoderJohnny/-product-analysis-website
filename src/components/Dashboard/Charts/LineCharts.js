import React from 'react';
import { Legend, Line, LineChart,Tooltip, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 50000,
            "revenue": 104010
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 42300,
            "revenue": 245000
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 72600,
            "revenue": 670100
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 52900,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 651000,
            "revenue": 509000
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 97000,
            "revenue": 610000
        }
    ]
    
    return (
        // <ResponsiveContainer width="100%" height="100%">
        <LineChart width={800} height={500} data={data} margin={{
            top: 20, right: 30, left: 30, bottom: 5}}>
            <Line dataKey={'investment'}></Line>
            <Line dataKey={'sell'}></Line>
            <Line dataKey={'revenue'}></Line>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend/>
          <Line type="monotone" dataKey="investment" stroke="#fc03f0" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sell" stroke="#35fc03" />
        </LineChart>
        /* </ResponsiveContainer> */

    );
};

export default LineCharts;