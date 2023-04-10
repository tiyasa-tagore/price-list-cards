import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const marksArray = [
        { id: 1, name: "John", phy: 85, chem: 72, math: 90 },
        { id: 2, name: "Sarah", phy: 92, chem: 87, math: 88 },
        { id: 3, name: "Mike", phy: 78, chem: 85, math: 80 },
        { id: 4, name: "Emily", phy: 90, chem: 93, math: 87 },
        { id: 5, name: "David", phy: 81, chem: 88, math: 75 },
        { id: 6, name: "Alice", phy: 94, chem: 90, math: 91 },
        { id: 7, name: "Tom", phy: 89, chem: 86, math: 92 },
        { id: 8, name: "Lena", phy: 76, chem: 80, math: 84 },
        { id: 9, name: "Oliver", phy: 82, chem: 88, math: 85 },
        { id: 10, name: "Emma", phy: 93, chem: 91, math: 92 },
        { id: 11, name: "Grace", phy: 88, chem: 85, math: 77 },
        { id: 12, name: "Ryan", phy: 79, chem: 83, math: 90 }
      ];
      
    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={marksArray}
            >
                <Line dataKey="phy">           </Line>
                <Line stroke="#8884d8" dataKey="math">           </Line>
                <Line dataKey="chem">           </Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>

            </LineChart>
        </div>
    );
};

export default Dashboard;
