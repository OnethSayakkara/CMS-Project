import React, { useState, useEffect } from "react"
import AdminLayout from "./AdminLayout"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  Search,
  Filter,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  User,
  MapPin,
  Briefcase,
  Calendar,
  GraduationCap,
  Clock,
  CheckCircle,
  XCircle,
  Loader
} from "lucide-react"

// Mock data for registered users
const registeredUsers = [
  {
    id: "1",
    firstName: "Maria",
    lastName: "Santos",
    email: "maria.santos@example.com",
    title: "Dr",
    gender: "Female",
    dateOfBirth: "1985-03-15",
    membershipCategory: "Professional Member",
    jobTitle: "Prevention Specialist",
    organization: "Manila Health Center",
    countryOrigin: "Philippines",
    countryResidence: "Philippines",
    experienceYear: "2015",
    areasOfWorkPrevention: [
      "Programme Delivery",
      "Training/Further Education",
      "Research"
    ],
    areasOfWorkTreatment: ["Medical/Health"],
    areasOfInterest: ["Community", "Youth", "School"],
    completedTraining: "Yes",
    academicQualifications:
      "PhD in Public Health, University of the Philippines",
    shortBio:
      "Dedicated prevention specialist with over 8 years of experience in community-based prevention programs. Passionate about training the next generation of prevention professionals.",
    registeredDate: "2024-01-15",
    status: "active"
  },
  {
    id: "2",
    firstName: "James",
    lastName: "Okonkwo",
    email: "james.okonkwo@example.com",
    title: "Mr",
    gender: "Male",
    dateOfBirth: "1990-07-22",
    membershipCategory: "Regular Member",
    jobTitle: "Social Worker",
    organization: "Lagos Community Services",
    countryOrigin: "Nigeria",
    countryResidence: "Nigeria",
    experienceYear: "2018",
    areasOfWorkPrevention: ["Social Services", "Programme Delivery"],
    areasOfWorkTreatment: ["Programme Delivery", "Social Services"],
    areasOfInterest: ["Community", "Family", "Youth"],
    completedTraining: "Yes",
    academicQualifications: "BSc Social Work, University of Lagos",
    shortBio:
      "Community-focused social worker dedicated to supporting families affected by substance use disorders.",
    registeredDate: "2024-02-20",
    status: "active"
  },
  {
    id: "3",
    firstName: "Sarah",
    lastName: "Chen",
    email: "sarah.chen@example.com",
    title: "Ms",
    gender: "Female",
    dateOfBirth: "1992-11-08",
    membershipCategory: "Student Member",
    jobTitle: "Graduate Student",
    organization: "National University of Singapore",
    countryOrigin: "Singapore",
    countryResidence: "Singapore",
    experienceYear: "2022",
    areasOfWorkPrevention: ["Research", "Student/Youth"],
    areasOfWorkTreatment: [],
    areasOfInterest: ["Recovery", "Medical", "Research"],
    completedTraining: "No",
    academicQualifications: "Currently pursuing Masters in Clinical Psychology",
    shortBio:
      "Graduate student researching evidence-based recovery support methodologies.",
    registeredDate: "2024-03-10",
    status: "active"
  },
  {
    id: "4",
    firstName: "Ahmed",
    lastName: "Hassan",
    email: "ahmed.hassan@example.com",
    title: "Prof",
    gender: "Male",
    dateOfBirth: "1975-05-30",
    membershipCategory: "DDR Professional Member",
    jobTitle: "Director of Prevention Programs",
    organization: "Cairo Prevention Institute",
    countryOrigin: "Egypt",
    countryResidence: "Egypt",
    experienceYear: "2005",
    areasOfWorkPrevention: [
      "Policy",
      "Training/Further Education",
      "Research",
      "Programme Delivery"
    ],
    areasOfWorkTreatment: ["Policy", "Training/Further Education"],
    areasOfInterest: ["Population Wide", "Community", "School"],
    completedTraining: "Yes",
    academicQualifications:
      "PhD in Psychology, Cairo University; Masters in Public Health",
    shortBio:
      "Leading prevention researcher and trainer with 20+ years of experience. Established the first prevention training center in Egypt and has trained over 500 professionals.",
    registeredDate: "2023-11-05",
    status: "active"
  },
  {
    id: "5",
    firstName: "Elena",
    lastName: "Rodriguez",
    email: "elena.rodriguez@example.com",
    title: "Dr",
    gender: "Female",
    dateOfBirth: "1988-09-12",
    membershipCategory: "Professional Member",
    jobTitle: "Clinical Psychologist",
    organization: "Mexico City Treatment Center",
    countryOrigin: "Mexico",
    countryResidence: "Mexico",
    experienceYear: "2012",
    areasOfWorkPrevention: ["Medical/Health"],
    areasOfWorkTreatment: ["Programme Delivery", "Medical/Health", "Research"],
    areasOfInterest: ["Treatment Centre", "Recovery", "Family"],
    completedTraining: "Yes",
    academicQualifications: "PsyD Clinical Psychology, UNAM",
    shortBio:
      "Clinical psychologist specializing in addiction treatment and family therapy approaches.",
    registeredDate: "2024-01-28",
    status: "active"
  }
]

// Mock data for pending registrations
const pendingUsers = [
  {
    id: "p1",
    firstName: "John",
    lastName: "Doe",
    email: "onethsayakkara@gmail.com",
    title: "Mr",
    gender: "Male",
    dateOfBirth: "1995-06-20",
    membershipCategory: "Regular Member",
    jobTitle: "Community Health Worker",
    organization: "Boston Health Initiative",
    countryOrigin: "United States",
    countryResidence: "United States",
    experienceYear: "2020",
    areasOfWorkPrevention: ["Programme Delivery", "Community"],
    areasOfWorkTreatment: [],
    areasOfInterest: ["Community", "Youth"],
    completedTraining: "No",
    academicQualifications: "BA in Public Health, Boston University",
    shortBio:
      "Passionate about community health and prevention work. Looking to expand my knowledge through professional certification.",
    registeredDate: "2024-06-15",
    status: "pending"
  },
  {
    id: "p2",
    firstName: "Priya",
    lastName: "Sharma",
    email: "priya.sharma@example.com",
    title: "Dr",
    gender: "Female",
    dateOfBirth: "1982-12-03",
    membershipCategory: "Professional Member",
    jobTitle: "Psychiatrist",
    organization: "Delhi Medical College",
    countryOrigin: "India",
    countryResidence: "India",
    experienceYear: "2010",
    areasOfWorkPrevention: ["Medical/Health", "Research"],
    areasOfWorkTreatment: [
      "Medical/Health",
      "Programme Delivery",
      "Training/Further Education"
    ],
    areasOfInterest: ["Medical", "Treatment Centre", "Recovery"],
    completedTraining: "Yes",
    academicQualifications:
      "MD Psychiatry, AIIMS Delhi; Fellowship in Addiction Medicine",
    shortBio:
      "Board-certified psychiatrist with subspecialty in addiction medicine. Published researcher with focus on treatment outcomes in South Asian populations. Seeking professional membership to contribute to global treatment standards.",
    registeredDate: "2024-06-18",
    status: "pending"
  },
  {
    id: "p3",
    firstName: "Michael",
    lastName: "Thompson",
    email: "michael.t@example.com",
    title: "Mr",
    gender: "Male",
    dateOfBirth: "1998-04-11",
    membershipCategory: "Student Member",
    jobTitle: "Graduate Research Assistant",
    organization: "University of Toronto",
    countryOrigin: "Canada",
    countryResidence: "Canada",
    experienceYear: "2023",
    areasOfWorkPrevention: ["Research", "Student/Youth"],
    areasOfWorkTreatment: [],
    areasOfInterest: ["School", "Youth", "Research"],
    completedTraining: "No",
    academicQualifications: "Currently pursuing MSc in Health Psychology",
    shortBio:
      "First-year graduate student interested in school-based prevention programs.",
    registeredDate: "2024-06-20",
    status: "pending"
  },
  {
    id: "p4",
    firstName: "Fatima",
    lastName: "Al-Rashid",
    email: "fatima.alrashid@example.com",
    title: "Ms",
    gender: "Female",
    dateOfBirth: "1990-08-25",
    membershipCategory: "DDR Professional Member",
    jobTitle: "Program Manager",
    organization: "UAE Ministry of Health",
    countryOrigin: "United Arab Emirates",
    countryResidence: "United Arab Emirates",
    experienceYear: "2014",
    areasOfWorkPrevention: ["Policy", "Programme Delivery", "Funding"],
    areasOfWorkTreatment: ["Policy", "Programme Delivery"],
    areasOfInterest: ["Population Wide", "Community", "Family"],
    completedTraining: "Yes",
    academicQualifications: "MPH, Johns Hopkins University; BA in Psychology",
    shortBio:
      "Government program manager overseeing national drug demand reduction initiatives. Experienced in policy development and large-scale program implementation across the Gulf region.",
    registeredDate: "2024-06-22",
    status: "pending"
  }
]

// ============================================================
// HELPER FUNCTIONS
// ============================================================

// Password generator
const generatePassword = () => {
  const length = 12
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"
  let password = ""
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length))
  }
  return password
}

export function UserManagementPage() {
  // ============================================================
  // STATE MANAGEMENT
  // ============================================================
  const [activeTab, setActiveTab] = useState("registered")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [sendingEmail, setSendingEmail] = useState(false)
  const [rejectReason, setRejectReason] = useState("")
  const [showRejectReasonModal, setShowRejectReasonModal] = useState(false)

  // ============================================================
  // INITIALIZE EMAILJS
  // ============================================================
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const currentUsers =
    activeTab === "registered" ? registeredUsers : pendingUsers

  const filteredUsers = currentUsers.filter(
    user =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.organization.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleViewUser = user => {
    setSelectedUser(user)
    setShowDetailModal(true)
  }

  // ============================================================
  // HANDLE APPROVE - SEND APPROVAL EMAIL WITH TOAST
  // ============================================================
  const handleApprove = async userId => {
    const user = currentUsers.find(u => u.id === userId)
    if (!user) return

    setSendingEmail(true)
    try {
      const generatedPassword = generatePassword()

      // Send approval email
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_APPROVAL_TEMPLATE_ID,
        {
          to_email: user.email,
          to_name: `${user.firstName} ${user.lastName}`,
          user_password: generatedPassword,
          login_url: import.meta.env.VITE_LOGIN_URL || "http://localhost:3000/login"
        }
      )

      console.log("✅ Approval email sent successfully!", result)

      // Show success toast
      toast.success(
        `✅ Approval email sent to ${user.email}\nPassword: ${generatedPassword}`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        }
      )

      // Close modal after 1 second
      setTimeout(() => {
        setShowDetailModal(false)
      }, 1000)
    } catch (error) {
      console.error("❌ Error sending approval email:", error)

      // Show error toast
      toast.error(
        `❌ Failed to send email: ${error.message}`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        }
      )
    } finally {
      setSendingEmail(false)
    }
  }

  // ============================================================
  // HANDLE REJECT - SHOW REASON MODAL
  // ============================================================
  const handleRejectClick = () => {
    setShowRejectReasonModal(true)
  }

  // ============================================================
  // HANDLE REJECT CONFIRMATION - SEND REJECTION EMAIL WITH TOAST
  // ============================================================
  const handleRejectConfirm = async () => {
    if (!selectedUser || !rejectReason.trim()) {
      toast.warning("Please enter a rejection reason", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
      return
    }

    setSendingEmail(true)
    try {
      // Send rejection email
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_REJECTION_TEMPLATE_ID,
        {
          to_email: selectedUser.email,
          to_name: `${selectedUser.firstName} ${selectedUser.lastName}`,
          rejection_reason: rejectReason
        }
      )

      console.log("✅ Rejection email sent successfully!", result)

      // Show success toast
      toast.success(
        `✅ Rejection email sent to ${selectedUser.email}`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        }
      )

      // Close modals after 1 second
      setTimeout(() => {
        setShowDetailModal(false)
        setShowRejectReasonModal(false)
        setRejectReason("")
      }, 1000)
    } catch (error) {
      console.error("❌ Error sending rejection email:", error)

      // Show error toast
      toast.error(
        `❌ Failed to send email: ${error.message}`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        }
      )
    } finally {
      setSendingEmail(false)
    }
  }

  const getMembershipBadgeColor = category => {
    switch (category) {
      case "Professional Member":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "Student Member":
        return "bg-green-100 text-green-700 border-green-200"
      case "DDR Professional Member":
        return "bg-purple-100 text-purple-700 border-purple-200"
      default:
        return "bg-slate-100 text-slate-700 border-slate-200"
    }
  }

  return (
    <>
      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          User Management
        </h1>
        <p className="text-slate-600">
          Manage registered users and review pending registrations
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border-2 border-slate-200 mb-6">
        <div className="border-b border-slate-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab("registered")}
              className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors relative ${
                activeTab === "registered"
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Registered Users
                <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                  {registeredUsers.length}
                </span>
              </div>
              {activeTab === "registered" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("pending")}
              className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors relative ${
                activeTab === "pending"
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Pending Registrations
                <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-bold rounded-full">
                  {pendingUsers.length}
                </span>
              </div>
              {activeTab === "pending" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, email, or organization..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border-2 border-slate-200 rounded-lg focus:border-slate-400 focus:outline-none transition-colors"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 border-2 border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filters</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Membership
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Organization
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Country
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {activeTab === "registered" ? "Registered" : "Applied"}
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.map(user => (
                <tr
                  key={user.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-semibold text-sm">
                        {user.firstName[0]}
                        {user.lastName[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {user.title} {user.firstName} {user.lastName}
                        </div>
                        <div className="text-sm text-slate-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getMembershipBadgeColor(
                        user.membershipCategory
                      )}`}
                    >
                      {user.membershipCategory}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-900">
                      {user.organization}
                    </div>
                    <div className="text-xs text-slate-500">
                      {user.jobTitle}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-900">
                      {user.countryResidence}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-600">
                      {new Date(user.registeredDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric"
                        }
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleViewUser(user)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-slate-700 border-2 border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <div className="text-sm text-slate-600">
            Showing{" "}
            <span className="font-semibold">{filteredUsers.length}</span> of{" "}
            <span className="font-semibold">{currentUsers.length}</span> users
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 border-2 border-slate-200 rounded-lg hover:border-slate-300 transition-colors disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1.5 bg-slate-900 text-white text-sm font-semibold rounded-lg">
              1
            </button>
            <button className="px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              2
            </button>
            <button className="p-2 border-2 border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {showDetailModal && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => !sendingEmail && setShowDetailModal(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-bold text-xl">
                  {selectedUser.firstName[0]}
                  {selectedUser.lastName[0]}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {selectedUser.title} {selectedUser.firstName}{" "}
                    {selectedUser.lastName}
                  </h2>
                  <p className="text-slate-600">{selectedUser.email}</p>
                  <span
                    className={`inline-flex mt-2 px-3 py-1 text-xs font-semibold rounded-full border ${getMembershipBadgeColor(
                      selectedUser.membershipCategory
                    )}`}
                  >
                    {selectedUser.membershipCategory}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowDetailModal(false)}
                disabled={sendingEmail}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors disabled:opacity-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-8 py-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Personal Details */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500">Full Name</span>
                      <span className="font-medium text-slate-900">
                        {selectedUser.title} {selectedUser.firstName}{" "}
                        {selectedUser.lastName}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500">Gender</span>
                      <span className="font-medium text-slate-900">
                        {selectedUser.gender}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500">Date of Birth</span>
                      <span className="font-medium text-slate-900">
                        {new Date(selectedUser.dateOfBirth).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          }
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Professional Details */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Professional Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500">Job Title</span>
                      <span className="font-medium text-slate-900">
                        {selectedUser.jobTitle}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500">Organization</span>
                      <span className="font-medium text-slate-900">
                        {selectedUser.organization}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500">Experience Since</span>
                      <span className="font-medium text-slate-900">
                        {selectedUser.experienceYear}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Location
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500">Country of Origin</span>
                      <span className="font-medium text-slate-900">
                        {selectedUser.countryOrigin}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500">
                        Country of Residence
                      </span>
                      <span className="font-medium text-slate-900">
                        {selectedUser.countryResidence}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Training */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Training & Qualifications
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500">UTC/UPC Training</span>
                      <span
                        className={`font-medium ${
                          selectedUser.completedTraining === "Yes"
                            ? "text-green-600"
                            : "text-slate-900"
                        }`}
                      >
                        {selectedUser.completedTraining}
                      </span>
                    </div>
                    <div className="py-2 border-b border-slate-100">
                      <span className="text-slate-500 block mb-2">
                        Academic Qualifications
                      </span>
                      <span className="font-medium text-slate-900 text-sm">
                        {selectedUser.academicQualifications}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Areas of Work - Prevention */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    Areas of Work - Prevention
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedUser.areasOfWorkPrevention.length > 0 ? (
                      selectedUser.areasOfWorkPrevention.map((area, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                        >
                          {area}
                        </span>
                      ))
                    ) : (
                      <span className="text-slate-400 text-sm">
                        None specified
                      </span>
                    )}
                  </div>
                </div>

                {/* Areas of Work - Treatment */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    Areas of Work - Treatment
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedUser.areasOfWorkTreatment.length > 0 ? (
                      selectedUser.areasOfWorkTreatment.map((area, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full"
                        >
                          {area}
                        </span>
                      ))
                    ) : (
                      <span className="text-slate-400 text-sm">
                        None specified
                      </span>
                    )}
                  </div>
                </div>

                {/* Areas of Interest */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    Areas of Interest
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedUser.areasOfInterest.map((area, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-50 text-purple-700 text-sm font-medium rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    Profile / Bio
                  </h3>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg">
                    {selectedUser.shortBio}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-slate-200 px-8 py-4 flex items-center justify-between">
              <div className="text-sm text-slate-500">
                <Calendar className="w-4 h-4 inline mr-1" />
                {activeTab === "registered" ? "Registered" : "Applied"} on{" "}
                {new Date(selectedUser.registeredDate).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  }
                )}
              </div>

              {activeTab === "pending" ? (
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleRejectClick}
                    disabled={sendingEmail}
                    className="flex items-center gap-2 px-6 py-2.5 border-2 border-red-200 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sendingEmail ? (
                      <Loader className="w-4 h-4 animate-spin" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                    {sendingEmail ? "Sending..." : "Reject"}
                  </button>
                  <button
                    onClick={() => handleApprove(selectedUser.id)}
                    disabled={sendingEmail}
                    className="flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sendingEmail ? (
                      <Loader className="w-4 h-4 animate-spin" />
                    ) : (
                      <CheckCircle className="w-4 h-4" />
                    )}
                    {sendingEmail ? "Sending..." : "Approve"}
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Reject Reason Modal */}
      {showRejectReasonModal && selectedUser && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => !sendingEmail && setShowRejectReasonModal(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-pink-600 px-8 py-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Rejection Reason</h3>
                <p className="text-red-100 text-sm mt-1">
                  Provide a reason for rejecting this application
                </p>
              </div>
              <button
                onClick={() => setShowRejectReasonModal(false)}
                disabled={sendingEmail}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                  Reason for Rejection *
                </label>
                <textarea
                  value={rejectReason}
                  onChange={e => setRejectReason(e.target.value)}
                  placeholder="e.g., Does not meet current qualifications, incomplete application, etc."
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors resize-none"
                  rows="5"
                />
              </div>

              <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg mb-6">
                <strong>Note:</strong> This reason will be included in the rejection email sent to the applicant.
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowRejectReasonModal(false)}
                  disabled={sendingEmail}
                  className="flex-1 px-4 py-2.5 border-2 border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRejectConfirm}
                  disabled={sendingEmail || !rejectReason.trim()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sendingEmail ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>Send Rejection</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
