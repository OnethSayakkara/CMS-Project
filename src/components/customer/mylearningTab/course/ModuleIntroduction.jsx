import React, { useEffect, useState, useRef } from "react"
import { CheckCircle, Play } from "lucide-react"
export function ModuleIntroduction({ onComplete }) {
  const [isCompleted, setIsCompleted] = useState(false)
  const contentRef = useRef(null)
  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }
  // Auto-complete when scrolled to bottom
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      // Check if user is near bottom of page
      if (scrollTop + clientHeight >= scrollHeight - 100 && !isCompleted) {
        // Optional: Auto-complete on scroll
        // handleComplete()
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isCompleted])
  return (
    <div className="max-w-4xl mx-auto py-8" ref={contentRef}>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Header Image/Video Placeholder */}
        <div className="relative h-64 bg-slate-900 flex items-center justify-center group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Module Introduction"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-5 h-5 text-blue-600 ml-1" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 text-white">
            <span className="px-2.5 py-1 bg-blue-600 rounded text-xs font-bold mb-2 inline-block">
              VIDEO LESSON
            </span>
            <h1 className="text-2xl font-bold">
              Introduction to the PEER Model
            </h1>
            <p className="text-slate-200 text-sm mt-1">Duration: 12:45</p>
          </div>
        </div>

        <div className="p-8">
          <div className="prose prose-slate max-w-none">
            <h2>Module Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Welcome to the Universal Recovery Curriculum (URC). In this
              module, we will explore the foundational concepts of the PEER
              model—a framework designed to empower individuals in recovery
              through peer-based support systems.
            </p>

            <h3>Learning Objectives</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  Understand the core principles of peer support and recovery
                  capital.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  Identify the roles and responsibilities of a recovery ally.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  Learn strategies for building effective peer support networks.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  Recognize the importance of cultural competence in recovery
                  support.
                </span>
              </li>
            </ul>

            <h3>Why This Matters</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Recovery is not a solitary journey. Research consistently shows
              that individuals with strong social support networks have better
              long-term outcomes. The PEER model provides a structured yet
              flexible approach to building these vital connections, ensuring
              that support is both effective and sustainable.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <h4 className="text-blue-900 font-bold mb-2 mt-0">
                Key Takeaway
              </h4>
              <p className="text-blue-800 m-0">
                "The opposite of addiction is not sobriety. The opposite of
                addiction is connection." — Johann Hari
              </p>
            </div>

            <h3>Next Steps</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              After watching the introduction video above and reviewing these
              objectives, please proceed to the Module PDF section. There, you
              will find the comprehensive study guide that covers these topics
              in depth. You will need to read through the entire PDF to unlock
              the final exam.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-8 mt-8 flex justify-center">
            <button
              onClick={handleComplete}
              disabled={isCompleted}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                isCompleted
                  ? "bg-green-100 text-green-700 cursor-default"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle className="w-6 h-6" />
                  Completed
                </>
              ) : (
                "Mark as Complete"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
