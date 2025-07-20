import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Direct", visitors: 400 },
  { name: "Social", visitors: 300 },
  { name: "Referral", visitors: 500 },
  { name: "Email", visitors: 200 },
];

const TrafficBarChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Traffic Sources</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="visitors" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficBarChart;
