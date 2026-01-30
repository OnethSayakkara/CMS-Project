import React from 'react'
import { ArrowRight, PlayCircle } from 'lucide-react'
export function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 overflow-hidden">
      {/* Abstract Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-300 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/30 border border-blue-400/30 backdrop-blur-sm">
              <span className="text-blue-50 font-medium text-sm tracking-wide uppercase">
                WHO-Approved Curricula
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Become a{' '}
              <span className="text-yellow-200">Certified Trainer.<br/><span className='text-white'>Empower Your Community.</span></span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Join our global network of professionals trained in evidence-based prevention, treatment, and recovery support. Train others to save lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-700 bg-white rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Browse Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>

              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-blue-400/50 bg-blue-800/20 backdrop-blur-sm rounded-lg hover:bg-blue-700/40 transition-all duration-300">
                <PlayCircle className="mr-2 h-5 w-5" />
                How It Works
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-blue-200/80 text-sm font-medium">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-blue-600 bg-blue-${i * 100 + 200} flex items-center justify-center text-xs text-blue-900 font-bold overflow-hidden`}
                    >
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span>10k+ Learners</span>
              </div>
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              <span>4.9/5 Rating</span>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center animate-fade-in-delay-2 hidden lg:flex">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div
                className="absolute bottom-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl animate-pulse"
                style={{
                  animationDelay: '1s',
                }}
              ></div>

              {/* Main Image Container */}
              <div className="relative z-10 w-full h-full bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700">
                <div className="w-full h-full bg-slate-900/40 rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                    alt="Students learning together"
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg flex items-center gap-3 transform -translate-x-4 translate-y-4 animate-fade-in-delay-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                        >
                          <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 50}`}
                            alt="Mentor"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Expert Mentors
                      </p>
                      <p className="text-xs text-gray-500">Online now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
