import React from 'react'
import { DashboardStatsCards } from './Dashboardstatscards'
import MixedBarLineChart from './analyticscharts/Mixedbarlinechart'
import CourseEnrollmentDonut from './analyticscharts/Courseenrollmentdonut'


const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Analytics Dashboard</h1>
        <p className="text-slate-600 mt-1">Monitor your platform's key metrics and performance</p>
      </div>

      {/* Stats Cards */}
      <DashboardStatsCards />
      <div data-section="booking-trend-section" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
 <MixedBarLineChart/>
        </div>
        <div className="lg:col-span-1">
 <CourseEnrollmentDonut/>
        </div>

      </div>
    </div>
  )
}

export default AdminDashboard
