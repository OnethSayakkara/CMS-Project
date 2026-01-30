import React from 'react'
import { ArrowRight, Clock, Earth  } from 'lucide-react'
export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block px-4 py-2 bg-green-500/30 border border-green-400/30 backdrop-blur-sm rounded-full mb-6">
          <span className="text-white font-medium text-sm tracking-wide uppercase">
            Start Your Journey
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to Become a Certified Trainer?
        </h2>
        <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
          Join our global network of professionals making a difference. Train
          others, save lives, and create lasting impact in your community.
        </p>

        <div className="flex items-center justify-center gap-2 text-green-300 mb-10">
          <Clock className="w-5 h-5" />
          <span className="text-sm font-medium">
            Application review within 5-7 business days
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-purple-800 bg-white rounded-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Application Process
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-green-400 bg-transparent rounded-lg hover:bg-green-800/50 transition-all duration-300">
            Download Curriculum Guide
          </button>
        </div>
        <div className='flex gap-3 items-center justify-center mt-8'>
            <Earth className='text-white'/>
            <p className="text-sm text-blue-200 opacity-80">
           Internationally recognized • ICAP certified • WHO-approved
          curricula
        </p>
        </div>
      </div>
    </section>
  )
}
