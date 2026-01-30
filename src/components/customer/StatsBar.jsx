import React from 'react'
import { Users, Globe, Award, TrendingUp } from 'lucide-react'
const stats = [
  {
    id: 1,
    label: 'Certified Trainers Worldwide',
    value: '10,000+',
    icon: Users,
  },
  {
    id: 2,
    label: 'Countries with Certified Trainers',
    value: '60+',
    icon: Globe,
  },
  {
    id: 3,
    label: 'Lives Impacted Through Training',
    value: '500K+',
    icon: TrendingUp,
  },
  {
    id: 4,
    label: 'ICAP Certifications Issued',
    value: '8,500+',
    icon: Award,
  },
]
export function StatsBar() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200 relative z-20 -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex items-center space-x-4 hover:shadow-md transition-shadow"
            >
              <div className="p-3 rounded-lg bg-slate-100">
                <stat.icon className="w-8 h-8 text-slate-700" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
