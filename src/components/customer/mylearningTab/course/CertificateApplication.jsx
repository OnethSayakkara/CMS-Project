import React, { useState } from "react"
import { CheckCircle, Award, ArrowRight, Loader2 } from "lucide-react"
export function CertificateApplication({ examScore, onComplete }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = () => {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      onComplete()
    }, 2000)
  }
  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto py-8">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6 animate-fade-in">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Application Submitted!
          </h2>

          <p className="text-slate-600 text-lg mb-8 max-w-lg mx-auto">
            Your certificate request has been successfully submitted. You will
            receive an email notification once your certificate is approved and
            ready for download (typically within 24-48 hours).
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-bold text-slate-900 mb-4">
              What happens next?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  1
                </div>
                <span>
                  Our team reviews your completion records and exam score.
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  2
                </div>
                <span>
                  Your official certificate is generated with a unique
                  verification ID.
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  3
                </div>
                <span>
                  You'll be notified via email and the certificate will appear
                  in your dashboard.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-slate-900 p-8 text-white text-center">
          <Award className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
          <h1 className="text-3xl font-bold mb-2">Certificate Application</h1>
          <p className="text-slate-300">
            Universal Recovery Curriculum - Module 1
          </p>
        </div>

        <div className="p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Completion Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
              <div className="text-sm text-slate-500 mb-1">
                Modules Completed
              </div>
              <div className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
                1/1 <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
              <div className="text-sm text-slate-500 mb-1">
                Final Exam Score
              </div>
              <div className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
                {examScore}%{" "}
                <span className="text-sm font-normal text-green-600 bg-green-100 px-2 py-0.5 rounded">
                  PASSED
                </span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
              <div className="text-sm text-slate-500 mb-1">Total Hours</div>
              <div className="text-2xl font-bold text-slate-900">12.5</div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <h3 className="font-bold text-slate-900 mb-4">Declaration</h3>
            <label className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors mb-8">
              <input
                type="checkbox"
                className="w-5 h-5 mt-0.5 text-blue-600 rounded focus:ring-blue-500"
                defaultChecked
              />
              <span className="text-slate-600 text-sm">
                I hereby certify that I have personally completed all required
                coursework and the final examination without unauthorized
                assistance. I understand that any misrepresentation may result
                in the revocation of my certificate.
              </span>
            </label>

            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed min-w-[200px] justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
