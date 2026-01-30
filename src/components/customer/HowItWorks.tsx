import React from 'react'
import { FileText, BookOpen, Award, Users , Lightbulb } from 'lucide-react'
const steps = [
  {
    id: 1,
    title: 'Apply for Certification',
    description:
      'Submit your application and professional background. Review process takes 5-7 days.',
    icon: FileText,
  },
  {
    id: 2,
    title: 'Complete Evidence-Based Training',
    description:
      'Master WHO-approved curricula through interactive modules, case studies, and assessments.',
    icon: BookOpen,
  },
  {
    id: 3,
    title: 'Get Certified as Trainer',
    description:
      'Pass final evaluation and receive your ICAP-recognized trainer certification.',
    icon: Award,
  },
  {
    id: 4,
    title: 'Train & Empower Others',
    description:
      'Use your certification to train family, colleagues, and community members. Create lasting impact.',
    icon: Users,
  },
]
export function HowItWorks() {
  return (
    <section className="py-20 bg-white overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
            Your Journey
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Train-the-Trainer Certification Path
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            From application to impact - your journey to becoming a certified
            trainer in four steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div
            className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-purple-200 z-0"
            aria-hidden="true"
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white rounded-full border-4 border-purple-50 flex items-center justify-center mb-6 shadow-sm group-hover:border-purple-100 group-hover:scale-110 transition-all duration-300 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white shadow-inner">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50/10 to-blue-50/10 rounded-2xl p-8 border border-green-100">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-white text-2xl">
              <Lightbulb className='w-8 h-8 text-blue-600'/>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                The Cascade Effect
              </h3>
              <p className="text-slate-600">
                When you become a certified trainer, you don't just learn - you
                multiply impact. Each trainer you certify can train dozens more,
                creating a ripple effect that saves lives across entire
                communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
