import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const BarCharts = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('data2.json')
            .then(data => {
                const loadedData = data.data.data;
                const phoneData = loadedData.map(phone => {
                    const parts = phone.slug.split('-')
                    const ph = {
                        name: parts[0],
                        value: parseInt(parts[1])
                    };
                    return ph;
                });
                setPhones(phoneData)
                // console.log(phoneData)

            })

    }, []);
    return (
        <BarChart width={500} height={400} data={phones} margin={{
            top: 20, right: 30, left: 30, bottom: 5}}>
            <Bar dataKey="value" fill="#03c2fc" />
            <XAxis dataKey={'name'}></XAxis>
        <Tooltip></Tooltip>
        <YAxis></YAxis>
        </BarChart>

    );
};

export default BarCharts;