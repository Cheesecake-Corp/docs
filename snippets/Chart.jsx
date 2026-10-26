"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Led', uv: 400 },
  { name: 'Úno', uv: 300 },
  { name: 'Bře', uv: 600 },
];

export const MyChart = () => {
  return (
    <div style={{ width: 200, height: 300 }}>
      <ResponsiveContainer width="200" height="300">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
