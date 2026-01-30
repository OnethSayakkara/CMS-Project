import React, { useState } from "react"
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  ArrowLeft,
  RefreshCw
} from "lucide-react"
const questions = [
  {
    id: 1,
    text: "What is the primary goal of the PEER model in recovery support?",
    options: [
      "To provide medical treatment",
      "To support long-term recovery through peer engagement",
      "To enforce strict rules",
      "To replace professional counseling"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    text: "Which of the following is NOT a core component of recovery capital?",
    options: [
      "Social capital",
      "Physical capital",
      "Financial capital",
      "Political capital"
    ],
    correctAnswer: 3
  },
  {
    id: 3,
    text: "Effective peer support relies most heavily on:",
    options: [
      "Shared lived experience",
      "Advanced medical degrees",
      "Strict disciplinary measures",
      "Financial incentives"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    text: "When should recovery planning begin?",
    options: [
      "After relapse occurs",
      "Only after treatment is completed",
      "As early as possible in the process",
      "When the family requests it"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    text: "The role of a recovery ally is best described as:",
    options: [
      "A supervisor",
      "A medical provider",
      "A supportive partner in the recovery journey",
      "A financial advisor"
    ],
    correctAnswer: 2
  }
]
export function KnowledgeCheck({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerSelect = optionIndex => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = optionIndex
    setSelectedAnswers(newAnswers)
  }
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults()
    }
  }
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }
  const calculateResults = () => {
    let correctCount = 0
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctCount++
      }
    })
    setScore((correctCount / questions.length) * 100)
    setShowResults(true)
  }
  const handleRetry = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setScore(0)
  }
  if (showResults) {
    const passed = score >= 80 // 80% pass threshold for knowledge check
    return (
      <div className="max-w-2xl mx-auto py-8">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center">
          <div
            className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6 ${
              passed ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {passed ? (
              <CheckCircle className="w-10 h-10 text-green-600" />
            ) : (
              <XCircle className="w-10 h-10 text-red-600" />
            )}
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {passed ? "Knowledge Check Passed!" : "Knowledge Check Failed"}
          </h2>

          <p className="text-slate-600 mb-6">
            You scored{" "}
            <span className="font-bold text-slate-900">{score}%</span>
            {passed
              ? ". You can now proceed to the next module."
              : ". You need 80% to pass."}
          </p>

          <div className="flex justify-center gap-4">
            {!passed && (
              <button
                onClick={handleRetry}
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Retry Quiz
              </button>
            )}

            {passed && (
              <button
                onClick={onComplete}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Proceed to Module Introduction
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
  const question = questions[currentQuestion]
  const isLastQuestion = currentQuestion === questions.length - 1
  const hasSelectedAnswer = selectedAnswers[currentQuestion] !== undefined
  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-slate-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-blue-600">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            Completed
          </span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`
            }}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6">
          {question.text}
        </h3>

        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedAnswers[currentQuestion] === index
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                checked={selectedAnswers[currentQuestion] === index}
                onChange={() => handleAnswerSelect(index)}
                className="w-5 h-5 text-blue-600 border-slate-300 focus:ring-blue-500"
              />
              <span
                className={`ml-3 font-medium ${
                  selectedAnswers[currentQuestion] === index
                    ? "text-blue-900"
                    : "text-slate-700"
                }`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center gap-2 px-4 py-2 text-slate-600 font-medium rounded-lg transition-colors ${
              currentQuestion === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!hasSelectedAnswer}
            className={`flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg transition-all ${
              !hasSelectedAnswer
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700 shadow-sm"
            }`}
          >
            {isLastQuestion ? "Submit Answers" : "Next Question"}
            {!isLastQuestion && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}
