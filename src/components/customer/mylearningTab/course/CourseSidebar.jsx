import React from "react"
import {
  ClipboardList,
  BookOpen,
  FileText,
  PenTool,
  Award,
  MessageSquare,
  Lock,
  CheckCircle,
  Download,
  FileIcon,
  Presentation,
  Video
} from "lucide-react"
const resources = [
  {
    id: "1",
    name: "Module PDF - The PEER Model",
    type: "pdf",
    size: "2.4 MB"
  },
  {
    id: "2",
    name: "PowerPoint Slides",
    type: "pptx",
    size: "5.1 MB"
  },
  {
    id: "3",
    name: "Additional Reading Materials",
    type: "pdf",
    size: "1.2 MB"
  },
  {
    id: "4",
    name: "Video Resources",
    type: "video",
    size: "External Link"
  }
]
export function CourseSidebar({
  activeTab,
  setActiveTab,
  activeSection,
  setActiveSection,
  completedSections,
  pdfProgress,
  examScore,
  certificateSubmitted
}) {
  const outlineItems = [
    {
      id: "knowledge-check",
      title: "My Knowledge Check",
      icon: ClipboardList,
      unlockedWhen: () => true
    },
    {
      id: "introduction",
      title: "Module Introduction",
      icon: BookOpen,
      unlockedWhen: () => completedSections.has("knowledge-check")
    },
    {
      id: "pdf",
      title: "Module PDF",
      icon: FileText,
      unlockedWhen: () => completedSections.has("introduction")
    },
    {
      id: "exam",
      title: "Module Exam",
      icon: PenTool,
      unlockedWhen: () => pdfProgress >= 100
    },
    {
      id: "certificate",
      title: "Apply for Certificate",
      icon: Award,
      unlockedWhen: () => examScore !== null && examScore >= 70
    },
    {
      id: "feedback",
      title: "Add Feedback",
      icon: MessageSquare,
      unlockedWhen: () => certificateSubmitted
    }
  ]
  const getItemStatus = item => {
    if (completedSections.has(item.id)) return "completed"
    if (!item.unlockedWhen()) return "locked"
    if (activeSection === item.id) return "active"
    return "unlocked"
  }
  const getFileIcon = type => {
    switch (type) {
      case "pdf":
        return FileText
      case "pptx":
        return Presentation
      case "video":
        return Video
      default:
        return FileIcon
    }
  }
  return (
    <div className="h-full flex flex-col bg-white border-r border-slate-200">
      {/* Tabs */}
      <div className="flex-shrink-0 border-b border-slate-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab("outline")}
            className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors relative ${
              activeTab === "outline"
                ? "text-blue-600"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Course Outline
            {activeTab === "outline" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("resources")}
            className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors relative ${
              activeTab === "resources"
                ? "text-blue-600"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Resources
            {activeTab === "resources" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        {activeTab === "outline" ? (
          <div className="p-4 space-y-1">
            {outlineItems.map((item, index) => {
              const status = getItemStatus(item)
              const Icon = item.icon
              const isLocked = status === "locked"
              const isCompleted = status === "completed"
              const isActive = status === "active"
              return (
                <div key={item.id}>
                  <button
                    onClick={() => !isLocked && setActiveSection(item.id)}
                    disabled={isLocked}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                      isLocked
                        ? "cursor-not-allowed opacity-50"
                        : isActive
                        ? "bg-blue-50 border border-blue-200"
                        : "hover:bg-slate-50"
                    }`}
                    title={
                      isLocked ? "Complete previous sections to unlock" : ""
                    }
                  >
                    {/* Icon */}
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isCompleted
                          ? "bg-green-100"
                          : isActive
                          ? "bg-blue-100"
                          : isLocked
                          ? "bg-slate-100"
                          : "bg-slate-100"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 ${
                          isCompleted
                            ? "text-green-600"
                            : isActive
                            ? "text-blue-600"
                            : isLocked
                            ? "text-slate-400"
                            : "text-slate-600"
                        }`}
                      />
                    </div>

                    {/* Title */}
                    <span
                      className={`flex-1 text-left text-sm font-medium ${
                        isCompleted
                          ? "text-green-700"
                          : isActive
                          ? "text-blue-700"
                          : isLocked
                          ? "text-slate-400"
                          : "text-slate-700"
                      }`}
                    >
                      {item.title}
                    </span>

                    {/* Status Icon */}
                    {isLocked ? (
                      <Lock className="w-4 h-4 text-slate-400" />
                    ) : isCompleted ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : null}
                  </button>

                  {/* PDF Progress Bar */}
                  {item.id === "pdf" && !isLocked && (
                    <div className="ml-11 mr-3 mt-2 mb-2">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-slate-500">Reading Progress</span>
                        <span className="font-medium text-slate-700">
                          {pdfProgress}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full transition-all duration-300"
                          style={{
                            width: `${pdfProgress}%`
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Exam Score Badge */}
                  {item.id === "exam" && examScore !== null && (
                    <div className="ml-11 mr-3 mt-1 mb-2">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          examScore >= 70
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        Score: {examScore}%{" "}
                        {examScore >= 70 ? "(Passed)" : "(Failed)"}
                      </span>
                    </div>
                  )}

                  {/* Certificate Badge */}
                  {item.id === "certificate" &&
                    !isLocked &&
                    !completedSections.has("certificate") && (
                      <div className="ml-11 mr-3 mt-1 mb-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-700">
                          Pass Required (≥70%)
                        </span>
                      </div>
                    )}
                </div>
              )
            })}
          </div>
        ) : (
          <div className="p-4 space-y-3">
            {resources.map(resource => {
              const FileTypeIcon = getFileIcon(resource.type)
              return (
                <div
                  key={resource.id}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                    <FileTypeIcon className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">
                      {resource.name}
                    </p>
                    <p className="text-xs text-slate-500">{resource.size}</p>
                  </div>
                  <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
