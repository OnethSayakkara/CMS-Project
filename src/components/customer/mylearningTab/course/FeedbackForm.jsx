import React, { useState } from "react"
import { Star, Send } from "lucide-react"
export function FeedbackForm({ onComplete }) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    setIsSubmitted(true)
    onComplete()
  }
  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto py-8 text-center">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-6">
            <Send className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Thank You for Your Feedback!
          </h2>
          <p className="text-slate-600 mb-8">
            Your input helps us improve the learning experience for everyone.
            You have now completed all steps for this module.
          </p>
          <button
            onClick={() => (window.location.href = "/dashboard")}
            className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Course Feedback</h2>
          <p className="text-slate-600 mt-2">
            Please take a moment to share your thoughts on this module. Your
            feedback is anonymous and greatly appreciated.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Rating */}
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-4">
              How would you rate this course overall?
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= (hoverRating || rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-slate-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Text Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                What did you like most?
              </label>
              <textarea
                className="w-full h-32 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="The content was..."
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                What can be improved?
              </label>
              <textarea
                className="w-full h-32 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="I wish there was more..."
              />
            </div>
          </div>

          {/* Recommendation */}
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-4">
              Would you recommend this course to a colleague?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="recommend"
                  className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-slate-700">Yes, definitely</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="recommend"
                  className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-slate-700">Maybe</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="recommend"
                  className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-slate-700">No</span>
              </label>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex justify-end">
            <button
              type="submit"
              disabled={rating === 0}
              className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Feedback
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
