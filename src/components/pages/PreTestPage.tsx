import React, { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  XCircle,
  Clock,
} from 'lucide-react'
const questions = [
  {
    id: 1,
    question: 'What is the primary goal of recovery support services?',
    options: [
      'To cure substance use disorders',
      'To provide long-term support for sustained recovery',
      'To replace professional treatment',
      'To monitor substance use',
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      'Which statement best describes recovery from substance use disorders?',
    options: [
      'Simply not using substances',
      'Completing a treatment program',
      'A long-term process of learning to live without substances',
      'A quick fix with immediate results',
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: 'The URC PEER Model is designed for:',
    options: [
      'Healthcare professionals only',
      'Individuals in recovery who want to become certified professionals',
      'Family members of those in recovery',
      'Government officials',
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: 'What does trauma-informed care emphasize?',
    options: [
      'Ignoring past trauma',
      'Understanding and responding to the effects of trauma',
      'Focusing only on substance use',
      'Avoiding difficult conversations',
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: 'Why is self-care important for recovery support professionals?',
    options: [
      'It is not important',
      'To prevent burnout and maintain effectiveness',
      'To avoid working with clients',
      'To reduce training requirements',
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question:
      'What is the purpose of professional boundaries in recovery support?',
    options: [
      'To distance yourself from clients',
      'To maintain ethical and effective relationships',
      'To avoid all personal connections',
      'To reduce workload',
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: 'The Recovery Allies Model (URC 2) is intended for:',
    options: [
      'Only individuals in recovery',
      'Individuals NOT in recovery who want to support others',
      'Medical doctors exclusively',
      'Law enforcement only',
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: 'What does GCCC stand for?',
    options: [
      'General Certification Curriculum Council',
      'Global Centre for Credentialing and Certification',
      'Government Council for Clinical Certification',
      'Global Clinical Care Center',
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    question:
      'Evidence-based peer support methodologies are important because:',
    options: [
      'They are based on personal opinion',
      'They have been proven effective through research',
      'They are easier to implement',
      'They require less training',
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: 'What is a key characteristic of effective recovery support?',
    options: [
      'Providing all the answers',
      'Empowering individuals in their recovery journey',
      'Making decisions for clients',
      'Focusing only on abstinence',
    ],
    correctAnswer: 1,
  },
]
export function PreTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>(
    new Array(questions.length).fill(-1),
  )
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)
  }
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }
  const handleSubmit = () => {
    let correctCount = 0
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctCount++
      }
    })
    const percentage = (correctCount / questions.length) * 100
    setScore(percentage)
    setShowResults(true)
  }
  const progress = ((currentQuestion + 1) / questions.length) * 100
  const allAnswered = answers.every((answer) => answer !== -1)
  const passed = score >= 70
  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            {passed ? (
              <>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Congratulations! You Passed!
                </h1>
                <p className="text-xl text-slate-600 mb-6">
                  You scored{' '}
                  <span className="font-bold text-green-600">
                    {score.toFixed(0)}%
                  </span>
                </p>
                <p className="text-slate-600 mb-8">
                  You have successfully completed the pre-test assessment. You
                  can now access the learning materials and continue your
                  certification journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => (window.location.href = '/course/urc')}
                    className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Continue to Learning Materials
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <XCircle className="w-12 h-12 text-orange-600" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Not Quite There Yet
                </h1>
                <p className="text-xl text-slate-600 mb-6">
                  You scored{' '}
                  <span className="font-bold text-orange-600">
                    {score.toFixed(0)}%
                  </span>
                </p>
                <p className="text-slate-600 mb-8">
                  You need at least 70% to pass. Don't worry! Review the course
                  introduction and resources, then try again when you're ready.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => (window.location.href = '/course/urc')}
                    className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Review Resources
                  </button>
                  <button
                    onClick={() => {
                      setShowResults(false)
                      setCurrentQuestion(0)
                      setAnswers(new Array(questions.length).fill(-1))
                      setScore(0)
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Try Again
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => (window.location.href = '/course/urc')}
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Course
          </button>

          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Pre-Certification Assessment
              </h1>
              <p className="text-slate-600 mt-2">
                Answer these questions to begin your certification journey
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-slate-600">
              <Clock className="w-5 h-5" />
              <span className="text-sm">No time limit</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-slate-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-full transition-all duration-300 rounded-full"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-slate-600 mt-2">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>{progress.toFixed(0)}% Complete</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="mb-8">
            <div className="text-sm font-semibold text-purple-600 mb-3">
              QUESTION {currentQuestion + 1}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {questions[currentQuestion].question}
            </h2>
          </div>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <label
                key={index}
                className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${answers[currentQuestion] === index ? 'border-purple-500 bg-purple-50' : 'border-slate-200 hover:border-purple-300 hover:bg-slate-50'}`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  checked={answers[currentQuestion] === index}
                  onChange={() => handleAnswerSelect(index)}
                  className="w-5 h-5 text-purple-600 border-slate-300 focus:ring-purple-500 mt-0.5"
                />
                <span className="ml-3 text-slate-700 flex-1">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 font-semibold rounded-lg transition-all ${currentQuestion === 0 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-50'}`}
          >
            <ArrowLeft className="w-5 h-5 inline mr-2" />
            Previous
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className={`px-8 py-3 font-bold rounded-lg transition-all ${allAnswered ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:shadow-lg transform hover:-translate-y-0.5' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
            >
              Submit Assessment
              <CheckCircle className="w-5 h-5 inline ml-2" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={answers[currentQuestion] === -1}
              className={`px-6 py-3 font-semibold rounded-lg transition-all ${answers[currentQuestion] === -1 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'}`}
            >
              Next
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
          )}
        </div>

        {/* Answer Status */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-3">Answer Progress</h3>
          <div className="flex flex-wrap gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${answers[index] !== -1 ? 'bg-green-500 text-white' : index === currentQuestion ? 'bg-purple-500 text-white' : 'bg-white border-2 border-slate-300 text-slate-600 hover:border-purple-300'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <p className="text-sm text-slate-600 mt-4">
            {answers.filter((a) => a !== -1).length} of {questions.length}{' '}
            questions answered
          </p>
        </div>
      </div>
    </div>
  )
}
