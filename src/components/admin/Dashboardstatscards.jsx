import React from 'react'
import { Users, Clock, Award, CheckCircle, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Mini Line Chart Component
const MiniLineChart = ({ data, color = "#3b82f6" }) => {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = 100 - ((value - min) / range) * 80 + 10
    return `${x},${y}`
  }).join(' ')

  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`lineGradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <polyline
        points={`0,100 ${points} 100,100`}
        fill={`url(#lineGradient-${color})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

// Mini Bar Chart Component
const MiniBarChart = ({ data, color = "#f97316" }) => {
  const max = Math.max(...data)
  
  return (
    <div className="flex items-end justify-between h-full gap-1.5">
      {data.map((value, index) => (
        <div
          key={index}
          className="flex-1 rounded-t-sm transition-all hover:opacity-80"
          style={{
            backgroundColor: color,
            opacity: 0.8,
            height: `${(value / max) * 100}%`,
            minHeight: '8px'
          }}
        />
      ))}
    </div>
  )
}

// Circular Progress Chart Component
const CircularProgress = ({ percentage, color = "#3b82f6", size = 80 }) => {
  const radius = 35
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
    </div>
  )
}

// Mini Area Chart Component
const MiniAreaChart = ({ data, color = "#10b981" }) => {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = 100 - ((value - min) / range) * 100
    return `${x},${y}`
  }).join(' ')

  return (
    <svg className="w-full h-16" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <polyline
        points={`0,100 ${points} 100,100`}
        fill={`url(#gradient-${color})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

// Main Stats Cards Component
export const DashboardStatsCards = () => {
  const navigate = useNavigate()

  const cards = [
    {
      id: 1,
      title: "Total Learners",
      value: "1,247",
      change: "5.12%",
      changeType: "increase",
      subtitle: "2.3k from last week",
      icon: Users,
      iconColor: "text-blue-600",
      chartType: "line",
      chartData: [980, 1020, 1050, 1100, 1180, 1220, 1247],
      chartColor: "#3b82f6",
      onClick: () => navigate('/admin/users')
    },
    {
      id: 2,
      title: "Pending Registrations",
      value: "23",
      change: "3.45%",
      changeType: "decrease",
      subtitle: "0.4k Down",
      icon: Clock,
      iconColor: "text-orange-600",
      chartType: "circular",
      percentage: 65,
      chartColor: "#3b82f6",
      onClick: () => navigate('/admin/users?tab=pending')
    },
    {
      id: 3,
      title: "Pending Certifications",
      value: "15",
      badge: "Review Required",
      badgeColor: "bg-red-100 text-red-700",
      change: "2.94%",
      changeType: "increase",
      subtitle: "1.1k Up",
      icon: Award,
      iconColor: "text-purple-600",
      chartType: "line",
      chartData: [10, 11, 9, 12, 13, 14, 15],
      chartColor: "#3b82f6",
      onClick: () => navigate('/admin/certifications?tab=pending')
    },
    {
      id: 4,
      title: "Total Certified Users",
      value: "892",
      subtitle: "71% pass rate",
      change: "4.23%",
      changeType: "increase",
      icon: CheckCircle,
      iconColor: "text-green-600",
      chartType: "area",
      chartData: [650, 700, 740, 790, 830, 865, 892],
      chartColor: "#10b981",
      onClick: () => navigate('/admin/certifications')
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={card.onClick}
          className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
        >
          {/* Title */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              {card.title}
            </h3>
          </div>

          {/* Main Content Row */}
          <div className="flex items-center justify-between">
            {/* Left: Icon & Value */}
            <div className='gird'>
            <div className="flex items-center gap-3 mb-4">
              <card.icon className="w-10 h-10 bg-slate-100  text-slate-600 rounded-full p-2" />
              <p className="text-3xl font-bold text-slate-900">{card.value}</p>
            </div>
              <div>
                
                {card.change && (
                  <div className="flex items-center gap-1 mt-1">
                    <span className={`text-sm font-semibold ${
                      card.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {card.changeType === 'increase' ? '↑' : '↓'} {card.change}
                    </span>
                  </div>
                )}
                {card.subtitle && (
                  <p className="text-xs text-slate-500 mt-1">{card.subtitle}</p>
                )}
                </div>
              </div>
            

            {/* Right: Chart */}
            <div className="w-24 h-20">
              {card.chartType === 'line' && (
                <MiniLineChart data={card.chartData} color={card.chartColor} />
              )}
              {card.chartType === 'bar' && (
                <MiniBarChart data={card.chartData} color={card.chartColor} />
              )}
              {card.chartType === 'area' && (
                <MiniAreaChart data={card.chartData} color={card.chartColor} />
              )}
              {card.chartType === 'circular' && (
                <CircularProgress percentage={card.percentage} color={card.chartColor} size={80} />
              )}
            </div>
          </div>

          {/* Breakdown (if available) */}
          {card.breakdown && (
            <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
              {card.breakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">{item.label}</span>
                  <span className="font-semibold text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
