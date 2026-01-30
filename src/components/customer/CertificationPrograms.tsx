import React from 'react'
import { Shield, ArrowRight, Globe, Award } from 'lucide-react'
const programs = [
  {
    id: 'upc',
    title: 'Universal Prevention Curriculum',
    acronym: 'UPC',
    certification: 'Prevention Specialist Trainer',
    description:
      'Master evidence-based prevention strategies and train others to identify risk factors, implement protective measures, and build resilient communities.',
    duration: '12 weeks',
    modules: 15,
    badge: 'ICAP Certified',
    icon: Shield,
  },
  {
    id: 'utc',
    title: 'Universal Treatment Curriculum',
    acronym: 'UTC',
    certification: 'Treatment Professional Trainer',
    description:
      'Become certified to train healthcare workers in comprehensive, evidence-based treatment approaches for substance use disorders.',
    duration: '14 weeks',
    modules: 18,
    badge: 'WHO Approved',
    icon: Award,
  },
  {
    id: 'urc',
    title: 'Universal Recovery Curriculum',
    acronym: 'URC',
    certification: 'Recovery Support Trainer',
    description:
      'Train others to provide compassionate, effective recovery support services that help individuals maintain long-term wellness.',
    duration: '10 weeks',
    modules: 12,
    badge: 'Globally Recognized',
    icon: Globe,
  },
]
export function CertificationPrograms() {
  const handleProgramClick = (programId: string) => {
    window.location.href = `/curriculum/${programId}`
  }
  return (
    <section className="py-20 bg-white" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-slate-600 font-semibold tracking-wide uppercase text-sm">
            Professional Certification
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Become a Certified Trainer
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Choose your specialization and join thousands of professionals
            making a global impact through evidence-based training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              onClick={() => handleProgramClick(program.id)}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full border-2 border-slate-200 hover:border-slate-300 cursor-pointer"
            >
              {/* Card Header */}
              <div className="relative bg-slate-50 border-b border-slate-200 p-6 flex items-center justify-between">
                <div>
                  <div className="text-slate-500 text-sm font-semibold uppercase tracking-wide mb-1">
                    {program.acronym}
                  </div>
                  <div className="text-slate-900 font-bold text-2xl">
                    {program.certification.split(' ')[0]}
                  </div>
                </div>
                <div className="w-16 h-16 bg-white border border-slate-200 rounded-xl flex items-center justify-center">
                  <program.icon className="w-8 h-8 text-slate-700" />
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-full shadow-sm flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {program.badge}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {program.title}
                </h3>

                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    Become a {program.certification}
                  </span>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
                  {program.description}
                </p>

                <div className="flex items-center justify-between text-sm text-slate-500 mb-6 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <span>{program.modules} Modules</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transform group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
                  View All Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            🌟 Internationally Recognized Credentials
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            All certification programs are based on WHO-approved curricula and
            recognized by ICAP (International Certification & Reciprocity
            Consortium). Your trainer certification will be valued worldwide.
          </p>
        </div>
      </div>
    </section>
  )
}
