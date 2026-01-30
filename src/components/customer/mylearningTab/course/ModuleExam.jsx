import React, { useEffect, useState } from "react"
import {
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  ArrowRight,
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
  },
  {
    id: 6,
    text: "Which stage of change is characterized by ambivalence?",
    options: ["Pre-contemplation", "Contemplation", "Action", "Maintenance"],
    correctAnswer: 1
  },
  {
    id: 7,
    text: "Motivational Interviewing is primarily:",
    options: ["Confrontational", "Directive", "Collaborative", "Educational"],
    correctAnswer: 2
  },
  {
    id: 8,
    text: 'What is the "Roseto Effect" related to?',
    options: [
      "Medication efficacy",
      "Community support and health outcomes",
      "Genetic predisposition",
      "Dietary habits"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    text: "Trauma-informed care emphasizes:",
    options: [
      'Asking "What is wrong with you?"',
      'Asking "What happened to you?"',
      "Ignoring past events",
      "Focusing solely on symptoms"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    text: "Self-care for peer support workers is:",
    options: [
      "Optional",
      "A sign of weakness",
      "Essential for preventing burnout",
      "Only for those with less experience"
    ],
    correctAnswer: 2
  }
]
export function ModuleExam({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutes in seconds
  useEffect(() => {
    if (showResults) return
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          calculateResults()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [showResults])
  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }
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
  const calculateResults = () => {
    let correctCount = 0
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctCount++
      }
    })
    const finalScore = Math.round((correctCount / questions.length) * 100)
    setScore(finalScore)
    setShowResults(true)
    onComplete(finalScore)
  }
  const handleRetry = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setScore(0)
    setTimeLeft(30 * 60)
  }
  if (showResults) {
    const passed = score >= 70
    return (
      <div className="max-w-2xl mx-auto py-8">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center">
          <div
            className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-6 ${
              passed ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {passed ? (
              <CheckCircle className="w-12 h-12 text-green-600" />
            ) : (
              <XCircle className="w-12 h-12 text-red-600" />
            )}
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            {passed ? "Exam Passed!" : "Exam Failed"}
          </h2>

          <div className="text-6xl font-bold text-slate-900 mb-4">{score}%</div>

          <p className="text-slate-600 mb-8 text-lg">
            {passed
              ? "Congratulations! You have successfully completed the module exam. You can now apply for your certificate."
              : "You need a score of 70% or higher to pass. Please review the material and try again."}
          </p>

          <div className="flex justify-center gap-4">
            {!passed && (
              <button
                onClick={handleRetry}
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <RefreshCw className="w-5 h-5" />
                Retake Exam
              </button>
            )}

            {passed && (
              <button
                disabled
                className="flex items-center gap-2 px-8 py-4 bg-green-100 text-green-700 font-bold rounded-xl cursor-default"
              >
                <CheckCircle className="w-5 h-5" />
                Exam Completed
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
      {/* Header with Timer and Progress */}
      <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-xl border border-slate-200 shadow-sm sticky top-4 z-10">
        <div className="flex items-center gap-2 text-slate-700 font-mono font-bold text-lg">
          <Clock
            className={`w-5 h-5 ${
              timeLeft < 300 ? "text-red-500 animate-pulse" : "text-slate-500"
            }`}
          />
          <span className={timeLeft < 300 ? "text-red-600" : ""}>
            {formatTime(timeLeft)}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`
              }}
            />
          </div>
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
          <div className="flex items-center gap-2 text-amber-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>Answers cannot be changed after submission</span>
          </div>

          <button
            onClick={handleNext}
            disabled={!hasSelectedAnswer}
            className={`flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl transition-all ${
              !hasSelectedAnswer
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            }`}
          >
            {isLastQuestion ? "Submit Exam" : "Next Question"}
            {!isLastQuestion && <ArrowRight className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  )
}
