import React from 'react';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const MixedBarLineChart = () => {
  // Your data (unchanged)
  const data = [
    { month: 'Aug', registrations: 38, certifiedUsers: 22, approvalRate: 65 },
    { month: 'Sep', registrations: 45, certifiedUsers: 28, approvalRate: 68 },
    { month: 'Oct', registrations: 52, certifiedUsers: 35, approvalRate: 70 },
    { month: 'Nov', registrations: 48, certifiedUsers: 32, approvalRate: 72 },
    { month: 'Dec', registrations: 65, certifiedUsers: 45, approvalRate: 75 },
    { month: '(2026) Jan', registrations: 78, certifiedUsers: 58, approvalRate: 78 }
  ];

  // Calculate summaries (unchanged)
  const totalRegistrations = data.reduce((sum, item) => sum + item.registrations, 0);
  const totalCertified = data.reduce((sum, item) => sum + item.certifiedUsers, 0);
  const avgApprovalRate = Math.round(data.reduce((sum, item) => sum + item.approvalRate, 0) / data.length);

  // Custom tooltip formatter (similar to your original)
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl text-sm">
          <div className="font-semibold mb-2 text-center border-b border-slate-700 pb-2">
            {label} {label.includes('2026') ? '2026' : '2025'}
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-teal-500"></div>
                <span className="text-slate-300">Registrations</span>
              </div>
              <span className="font-semibold">{payload[0].value}</span>
            </div>
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-amber-400"></div>
                <span className="text-slate-300">Certified</span>
              </div>
              <span className="font-semibold">{payload[1].value}</span>
            </div>
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-blue-500"></div>
                <span className="text-slate-300">Approval Rate</span>
              </div>
              <span className="font-semibold">{payload[2].value}%</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      {/* Chart Title (unchanged) */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">User Registration & Certification Trends</h2>
        <p className="text-sm text-slate-600 mt-1">Last 6 months overview (Aug 2025 - Jan 2026)</p>
      </div>

      {/* Chart */}
      <div className="mb-6">
        <ResponsiveContainer width="100%" height={320}>
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#475569' }} />
            <YAxis
              yAxisId="left"
              orientation="left"
              domain={[0, 'auto']}
              tick={{ fontSize: 12, fill: '#475569' }}
              label={{ value: 'Number of Users', angle: -90, position: 'insideLeft', offset: -10, fill: '#475569' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 100]}
              tick={{ fontSize: 12, fill: '#475569' }}
              label={{ value: 'Approval Rate (%)', angle: 90, position: 'insideRight', offset: -10, fill: '#475569' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="top"
              align="center"
              wrapperStyle={{ paddingBottom: 20 }}
              iconType="rect"
              formatter={(value) => <span className="text-slate-700">{value}</span>}
            />
            <Bar yAxisId="left" dataKey="registrations" fill="#14b8a6" name="New Registrations" barSize={28} radius={[4, 4, 0, 0]} />
            <Bar yAxisId="left" dataKey="certifiedUsers" fill="#fbbf24" name="Certified Users" barSize={28} radius={[4, 4, 0, 0]} />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="approvalRate"
              stroke="#3b82f6"
              strokeWidth={3}
              strokeDasharray="6 4"
              dot={false}
              activeDot={{ r: 5 }}
              name="Approval Rate (%)"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats (unchanged) */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200">
        <div className="text-center">
          <p className="text-sm text-slate-600">Total Registrations</p>
          <p className="text-2xl font-bold text-teal-600">{totalRegistrations}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-slate-600">Total Certified</p>
          <p className="text-2xl font-bold text-amber-500">{totalCertified}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-slate-600">Avg. Approval Rate</p>
          <p className="text-2xl font-bold text-blue-600">{avgApprovalRate}%</p>
        </div>
      </div>
    </div>
  );
};

export default MixedBarLineChart;
