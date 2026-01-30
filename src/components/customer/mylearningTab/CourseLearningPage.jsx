import React, { useState } from "react"
import { CourseHeader } from "./course/CourseHeader"
import { CourseSidebar } from "./course/CourseSidebar"
import { KnowledgeCheck } from "./course/KnowledgeCheck"
import { ModuleIntroduction } from "./course/ModuleIntroduction"
import { PDFViewer } from "./course/PDFViewer"
import { ModuleExam } from "./course/ModuleExam"
import { CertificateApplication } from "./course/CertificateApplication"
import { FeedbackForm } from "./course/FeedbackForm"
// Mock program data (same as in LearnerDashboard)
const programsData = {
  "1": {
    title: "Introduction to Prevention Science",
    code: "UPC 1",
    progress: 65,
    status: "in-progress"
  },
  "2": {
    title: "Treatment for Substance Use Disorders",
    code: "UTC 2",
    progress: 40,
    status: "in-progress"
  },
  "3": {
    title: "The PEER Model",
    code: "URC 1",
    progress: 100,
    status: "completed"
  },
  "4": {
    title: "Family Based Prevention Interventions",
    code: "UPC 4",
    progress: 0,
    status: "in-progress"
  },
  "5": {
    title: "School-based Prevention Interventions",
    code: "UPC 5",
    progress: 100,
    status: "in-progress"
  }
}
// Helper function to calculate initial state based on progress percentage
function getInitialStateFromProgress(progress) {
  const completedSections = new Set()
  let pdfProgress = 0
  let examScore = null
  let certificateSubmitted = false
  let activeSection = "knowledge-check"
  // The card progress directly represents the PDF reading progress
  // Sections unlock based on PDF completion:
  // 0% = not started, on knowledge-check
  // 1-99% = in progress, knowledge-check and introduction completed, reading PDF
  // 100% = PDF completed, can take exam, certificate, feedback
  if (progress > 0) {
    // Started - knowledge check completed
    completedSections.add("knowledge-check")
    // Introduction also completed (quick section)
    completedSections.add("introduction")
    // Now on PDF reading
    activeSection = "pdf"
    // PDF progress = card progress (exact match)
    pdfProgress = progress
  }
  if (progress >= 100) {
    // PDF completed - can now take exam
    completedSections.add("pdf")
    pdfProgress = 100
    activeSection = "exam"
  }
  return {
    completedSections,
    pdfProgress,
    examScore,
    certificateSubmitted,
    activeSection
  }
}
export function CourseLearningPage() {
  // Get program ID from URL
  const path = window.location.pathname
  const programId = path.split("/").pop() || "1"
  const program = programsData[programId] || programsData["1"]
  // Initialize state based on program progress
  const initialState = getInitialStateFromProgress(program.progress)
  const [activeTab, setActiveTab] = useState("outline")
  const [activeSection, setActiveSection] = useState(initialState.activeSection)
  const [completedSections, setCompletedSections] = useState(
    initialState.completedSections
  )
  const [pdfProgress, setPdfProgress] = useState(initialState.pdfProgress)
  const [examScore, setExamScore] = useState(initialState.examScore)
  const [certificateSubmitted, setCertificateSubmitted] = useState(
    initialState.certificateSubmitted
  )
  // Handlers for section completion
  const handleKnowledgeCheckComplete = () => {
    const newCompleted = new Set(completedSections)
    newCompleted.add("knowledge-check")
    setCompletedSections(newCompleted)
    setActiveSection("introduction")
  }
  const handleIntroductionComplete = () => {
    const newCompleted = new Set(completedSections)
    newCompleted.add("introduction")
    setCompletedSections(newCompleted)
    setActiveSection("pdf")
  }
  const handlePdfProgress = progress => {
    setPdfProgress(progress)
    if (progress >= 100 && !completedSections.has("pdf")) {
      const newCompleted = new Set(completedSections)
      newCompleted.add("pdf")
      setCompletedSections(newCompleted)
    }
  }
  const handleExamComplete = score => {
    setExamScore(score)
    if (score >= 70) {
      const newCompleted = new Set(completedSections)
      newCompleted.add("exam")
      setCompletedSections(newCompleted)
      setActiveSection("certificate")
    }
  }
  const handleCertificateComplete = () => {
    setCertificateSubmitted(true)
    const newCompleted = new Set(completedSections)
    newCompleted.add("certificate")
    setCompletedSections(newCompleted)
    setActiveSection("feedback")
  }
  const handleFeedbackComplete = () => {
    const newCompleted = new Set(completedSections)
    newCompleted.add("feedback")
    setCompletedSections(newCompleted)
  }
  // Render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "knowledge-check":
        return <KnowledgeCheck onComplete={handleKnowledgeCheckComplete} />
      case "introduction":
        return <ModuleIntroduction onComplete={handleIntroductionComplete} />
      case "pdf":
        return (
          <PDFViewer
            onProgressUpdate={handlePdfProgress}
            initialProgress={pdfProgress}
          />
        )
      case "exam":
        return <ModuleExam onComplete={handleExamComplete} />
      case "certificate":
        return (
          <CertificateApplication
            examScore={examScore || 0}
            onComplete={handleCertificateComplete}
          />
        )
      case "feedback":
        return <FeedbackForm onComplete={handleFeedbackComplete} />
      default:
        return <div>Select a section to begin</div>
    }
  }
  return (
    <div className="h-screen flex flex-col bg-slate-50 overflow-hidden">
      <CourseHeader programName={program.title} programCode={program.code} />

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - 1/3 width on desktop, hidden/collapsible on mobile */}
        <div className="w-full md:w-1/3 lg:w-[350px] xl:w-[400px] flex-shrink-0 h-full overflow-hidden border-r border-slate-200 bg-white z-10">
          <CourseSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            completedSections={completedSections}
            pdfProgress={pdfProgress}
            examScore={examScore}
            certificateSubmitted={certificateSubmitted}
          />
        </div>

        {/* Right Content Area - 2/3 width */}
        <div className="flex-1 h-full overflow-y-auto bg-slate-50 p-4 md:p-8 scrollbar-thin">
          <div className="max-w-5xl mx-auto h-full">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}
