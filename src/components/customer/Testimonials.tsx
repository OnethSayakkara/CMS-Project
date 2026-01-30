import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Dr. Maria Santos',
    role: 'Certified Prevention Trainer',
    credential: 'UPC Certified',
    location: 'Philippines',
    countryCode: 'PH',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    quote:
      'After completing my certification, I trained over 50 healthcare workers in my region. The evidence-based curriculum gave me the confidence to lead workshops, and now those 50 professionals are training their own communities. The cascade effect is real.',
    rating: 5,
    impact: '50+ professionals trained',
  },
  {
    id: 2,
    name: 'James Okonkwo',
    role: 'Certified Treatment Trainer',
    credential: 'UTC Certified',
    location: 'Nigeria',
    countryCode: 'NG',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    quote:
      "The WHO-approved curriculum transformed how I approach training. I've since certified 30+ social workers who are now providing evidence-based treatment support in underserved communities. This certification opened doors I never imagined.",
    rating: 5,
    impact: '30+ social workers certified',
  },
  {
    id: 3,
    name: 'Sarah Chen',
    role: 'Certified Recovery Support Trainer',
    credential: 'URC Certified',
    location: 'Singapore',
    countryCode: 'SG',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    quote:
      "As a family member who lost someone to addiction, becoming a certified trainer gave me purpose. I've trained 40+ community volunteers who now provide compassionate recovery support. We're saving lives together.",
    rating: 5,
    impact: '40+ volunteers trained',
  },
  {
    id: 4,
    name: 'Ahmed Hassan',
    role: 'Certified Prevention Trainer',
    credential: 'UPC Certified',
    location: 'Egypt',
    countryCode: 'EG',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    quote:
      "The international recognition of this certification helped me establish a training center in Cairo. I've trained over 100 professionals across government and NGO sectors. The ripple effect continues to grow.",
    rating: 5,
    impact: '100+ professionals trained',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )
  }

  return (
    <section className="py-20 " id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
            Success Stories
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Certified Trainers Making Global Impact
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Hear from certified trainers who are transforming their communities
            through evidence-based training.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Controls */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-2 rounded-full bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-2 rounded-full bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden px-4">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border border-blue-100 p-8 md:p-12 relative">
              <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-100 rotate-180" />

              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-200 shadow-md relative">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full">
                      {testimonials[activeIndex].credential}
                    </span>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-6">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="font-bold text-slate-900 text-lg">
                        {testimonials[activeIndex].name}
                      </div>
                      <div className="text-slate-500">
                        {testimonials[activeIndex].role}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 mt-1">
                        <div className="w-5 h-5 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">
                          <img
                            src={`https://flagcdn.com/w40/${testimonials[activeIndex].countryCode.toLowerCase()}.png`}
                            alt={`${testimonials[activeIndex].location} flag`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span>{testimonials[activeIndex].location}</span>
                      </div>
                    </div>
                    <div className="bg-blue-100 px-4 py-2 rounded-lg">
                      <div className="text-sm font-semibold text-blue-900">
                        Impact
                      </div>
                      <div className="text-xs text-blue-700">
                        {testimonials[activeIndex].impact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-blue-600 w-8' : 'bg-slate-300 hover:bg-slate-400'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
