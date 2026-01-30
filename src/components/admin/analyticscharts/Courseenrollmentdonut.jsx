import React, { useState } from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'

const CourseEnrollmentDonut = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  // Data for the three curricula
  const data = [
    { name: 'UPC', value: 450, fill: '#14b8a6' },
    { name: 'UTC', value: 320, fill: '#f97316' },
    { name: 'URC', value: 280, fill: '#6366f1' }
  ]

  const total = data.reduce((sum, item) => sum + item.value, 0)

  // Calculate percentages
  const dataWithPercentage = data.map(item => ({
    ...item,
    percentage: ((item.value / total) * 100).toFixed(1)
  }))

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl border border-slate-700">
          <p className="font-semibold text-sm">{data.name}</p>
          <p className="text-sm text-slate-300">Enrollments: <span className="text-white font-semibold">{data.value}</span></p>
          <p className="text-sm text-slate-300">Percentage: <span className="text-white font-semibold">{data.percentage}%</span></p>
        </div>
      )
    }
    return null
  }

  // Custom label for legend
  const renderCustomLegend = (props) => {
    const { payload } = props
    return (
      <div className="flex flex-wrap gap-6 justify-center mt-2">
        {payload.map((entry, index) => {
          const item = dataWithPercentage.find(d => d.name === entry.value)
          return (
            <div key={`legend-${index}`} className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-sm text-slate-700 font-medium">
                {entry.value}
              </span>
              <span className="text-sm text-slate-500">
                {item?.percentage}%
              </span>
            </div>
          )
        })}
      </div>
    )
  }

  const handlePieEnter = (_, index) => {
    setActiveIndex(index)
  }

  const handlePieLeave = () => {
    setActiveIndex(null)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-900">Course Enrollments by Curriculum</h2>
        <p className="text-slate-600 mt-2 text-sm">Distribution across three curriculum programs</p>
      </div>

      {/* Chart Container */}
      <div className="flex justify-center relative ">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={dataWithPercentage}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
              onMouseEnter={handlePieEnter}
              onMouseLeave={handlePieLeave}
            >
              {dataWithPercentage.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  opacity={activeIndex === null || activeIndex === index ? 1 : 0.5}
                  style={{
                    transition: 'opacity 0.3s ease',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={renderCustomLegend} />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Text Overlay */}
        <div className="absolute md:top-[45%] 2xl:top-[45%] top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <p className="text-sm font-medium text-slate-600">Total</p>
          <p className="text-3xl font-bold text-slate-900">{total}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseEnrollmentDonut
