import React from 'react'
export function IntroductionSection() {
  return (
    <section className="md:pt-24 md:pb-10 py-5 bg-white" id="what-we-do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              An Introduction to Universal Curricula
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The Universal Prevention, Treatment and Recovery Curriculum
              provide training programmes for those wishing to develop their
              professional knowledge, skills and competence in addressing
              substance use prevention and delivering treatment services to
              individuals and their families. UPC, UTC and URC have been
              developed by teams of international experts in the field.
            </p>
          </div>

          {/* Right Side - Logo Image */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <img
              src="https://colombo-plan.org/wp-content/uploads/2025/06/UC-Logo_for-lighter-backgrounds_Oct2020-1024x440.png"
              alt="Universal Curricula Logo"
              className="w-full max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
