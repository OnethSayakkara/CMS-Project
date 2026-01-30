import React from "react"
import { ArrowLeft } from "lucide-react"
export function CourseHeader({ programName, programCode }) {
  return (
    <header className="flex-shrink-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="w-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Logo & Program Name */}
          <div className="flex items-center gap-4">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => (window.location.href = "/")}
            >
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                UC
              </div>
              <span className="hidden sm:block font-bold text-lg text-slate-900">
                Universal Curricula
              </span>
            </div>

            <div className="hidden md:block h-8 w-px bg-slate-200" />

            <div className="hidden md:flex items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-bold rounded bg-yellow-50 text-black">
                {programCode}
              </span>
              <span className="text-sm font-medium text-slate-700 truncate max-w-[300px]">
                {programName}
              </span>
            </div>
          </div>

          {/* Right Side - Back Button */}
          <button
            onClick={() => (window.location.href = "/mylearning")}
            className="flex items-center gap-2 px-4 py-2 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Dashboard</span>
          </button>
        </div>
      </div>
    </header>
  )
}
