import React from 'react'
import {
  Stethoscope,
  Heart,
  GraduationCap,
  Users,
  Building,
  Landmark,
  ArrowRight,
} from 'lucide-react'
const audiences = [
  {
    title: 'Training Organizations',
    description:
      'NGOs and training institutes that conduct professional development programs and want to train throughout their region or create public trainings.',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Colleges & Universities',
    description:
      'Educational institutions seeking to integrate Universal Curricula into courses at undergraduate, postgraduate, or graduate levels.',
    icon: GraduationCap,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Healthcare Organizations',
    description:
      'Treatment centers, hospitals, and healthcare facilities (charitable or for-profit) that conduct training events in drug demand reduction.',
    icon: Stethoscope,
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Government Agencies',
    description:
      'Government ministries and institutions that wish to train their own staff or national professionals in evidence-based approaches.',
    icon: Landmark,
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    title: 'Civil Society Organizations',
    description:
      'Community-based organizations working in drug demand reduction that conduct training events and support local communities.',
    icon: Heart,
    color: 'from-pink-500 to-pink-600',
  },
  {
    title: 'Professional Schools',
    description:
      'Professional continuing education bodies and specialized schools that provide ongoing professional development in related fields.',
    icon: Building,
    color: 'from-orange-500 to-orange-600',
  },
]
export function WhoShouldGetCertified() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
            Eligible Organizations
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Who Can Become a Training Provider?
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Any organization that meets certain criteria and wishes to provide
            training in the drug demand reduction field can become a Training
            Provider.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${audience.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <audience.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Enhance the Worldwide Prevention, Treatment, and Recovery Support
            Workforce
          </h3>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto mb-8">
            Our goal is to ensure that professionals worldwide have access to
            current, evidence-based training materials that meet international
            standards, leading to more effective prevention, treatment, and
            recovery support programs.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-purple-50 transition-all duration-300 shadow-lg">
            View Application Requirements
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
