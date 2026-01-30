import React, { useState } from "react"
import { ArrowLeft, Upload, CheckCircle } from "lucide-react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from "../Footer"
import { Header } from "../Header"

export function RegisterPage() {
  const [formData, setFormData] = useState({
    membershipCategory: "",
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    genderSelfDescribe: "",
    dobYear: "",
    dobMonth: "",
    dobDay: "",
    jobTitle: "",
    organization: "",
    countryOrigin: "",
    countryResidence: "",
    experienceYear: "",
    areasOfWorkPrevention: [],
    areasOfWorkTreatment: [],
    areasOfInterest: [],
    completedTraining: "",
    academicQualifications: "",
    shortBio: "",
    newsletter: false
  })

  const handleSubmit = e => {
    e.preventDefault()
    
    // Create registration object with status
    const registrationData = {
      ...formData,
      status: "pending",
      submittedAt: new Date().toISOString(),
      id: Date.now() // Simple unique ID
    }
    
    // Get existing registrations from localStorage
    const existingRegistrations = JSON.parse(localStorage.getItem('registrations') || '[]')
    
    // Add new registration
    existingRegistrations.push(registrationData)
    
    // Save to localStorage
    localStorage.setItem('registrations', JSON.stringify(existingRegistrations))
    
    // Show success toast
    toast.success("Your information has been sent to the admin! You will receive an email once your application is approved.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
    
    console.log("Registration data saved:", registrationData)
  }

  const handleCheckboxChange = (category, value) => {
    setFormData(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }))
  }

  return (
    <div>
      <Header/>
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => (window.location.href = "/login")}
            className="inline-flex items-center text-slate-600 hover:text-slate-900 font-medium mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Create Your Account
              </h1>
              <p className="text-slate-600">
                Join the Universal Curricula community
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-10 border border-slate-200"
        >
          {/* Membership Category Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Certification Level
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Thank you for your interest in Universal Curricula! We are
              delighted you wish to join our community. We welcome your
              contribution to the prevention, treatment and recovery field.
              Please select the certification level you require.
            </p>

            <div className="space-y-3">
              {[
                {
                  value: "regular",
                  label: "Regular Certification",
                  link: "Criteria"
                },
                {
                  value: "student",
                  label: "Student Certification",
                  link: "Criteria"
                },
                {
                  value: "professional",
                  label: "Professional Certification",
                  link: "Criteria"
                },
                {
                  value: "ddr",
                  label: "Drug Demand Reduction Professional Certification",
                  link: "Criteria"
                }
              ].map(option => (
                <label
                  key={option.value}
                  className="flex items-center p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-slate-300 transition-colors"
                >
                  <input
                    type="radio"
                    name="membershipCategory"
                    value={option.value}
                    checked={formData.membershipCategory === option.value}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        membershipCategory: e.target.value
                      })
                    }
                    className="w-5 h-5 text-slate-900 border-slate-300 focus:ring-slate-500"
                  />
                  <span className="ml-3 font-medium text-slate-900">
                    {option.label}
                  </span>
                  <a
                    href="#"
                    className="ml-auto text-sm text-slate-600 hover:text-slate-900 font-medium"
                  >
                    {option.link}
                  </a>
                </label>
              ))}
            </div>

            <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <p className="text-sm text-slate-700 mb-2">
                All participants must accept{" "}
                <a
                  href="#"
                  className="text-slate-900 hover:underline font-medium"
                >
                  Universal Curricula's ethical principles
                </a>
                .
              </p>
              <p className="text-sm text-slate-700">
                Please see our{" "}
                <a
                  href="#"
                  className="text-slate-900 hover:underline font-medium"
                >
                  Privacy Policy
                </a>{" "}
                to see how we handle your data.
              </p>
            </div>
          </section>

          {/* Personal Details Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Personal Details
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              <span className="text-red-500">*</span> indicates mandatory fields
            </p>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.title}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        title: e.target.value
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                    required
                  >
                    <option value="">--</option>
                    <option value="mr">Mr</option>
                    <option value="mrs">Mrs</option>
                    <option value="ms">Ms</option>
                    <option value="dr">Dr</option>
                    <option value="rev">Rev</option>
                    <option value="prof">Prof</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        firstName: e.target.value
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        lastName: e.target.value
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      email: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                  placeholder="your.email@example.com"
                  required
                />
                <p className="mt-2 text-sm text-slate-500">
                  All emails from the system will be sent to this address.
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {[
                    "Male",
                    "Female",
                    "Prefer not to say",
                    "Prefer to self-describe"
                  ].map(option => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value={option.toLowerCase().replace(/ /g, "-")}
                        checked={
                          formData.gender ===
                          option.toLowerCase().replace(/ /g, "-")
                        }
                        onChange={e =>
                          setFormData({
                            ...formData,
                            gender: e.target.value
                          })
                        }
                        className="w-4 h-4 text-slate-900 border-slate-300 focus:ring-slate-500"
                      />
                      <span className="ml-3 text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
                {formData.gender === "prefer-to-self-describe" && (
                  <input
                    type="text"
                    value={formData.genderSelfDescribe}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        genderSelfDescribe: e.target.value
                      })
                    }
                    className="mt-3 w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                    placeholder="Please specify"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <select
                      value={formData.dobYear}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          dobYear: e.target.value
                        })
                      }
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                      required
                    >
                      <option value="">Year</option>
                      {Array.from(
                        {
                          length: 126
                        },
                        (_, i) => 2026 - i
                      ).map(year => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      value={formData.dobMonth}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          dobMonth: e.target.value
                        })
                      }
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                      required
                    >
                      <option value="">Month</option>
                      {[
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                      ].map((month, i) => (
                        <option key={month} value={i + 1}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      value={formData.dobDay}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          dobDay: e.target.value
                        })
                      }
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                      required
                    >
                      <option value="">Day</option>
                      {Array.from(
                        {
                          length: 31
                        },
                        (_, i) => i + 1
                      ).map(day => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Picture
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-slate-400 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-600 mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-slate-500">
                    PNG, JPG, GIF up to 64MB
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Job Title/Role <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      jobTitle: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Organisation/Institution{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      organization: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Country of Origin <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.countryOrigin}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      countryOrigin: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                  required
                >
                  <option value="">- Select -</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="IN">India</option>
                  <option value="PH">Philippines</option>
                  <option value="NG">Nigeria</option>
                </select>
                <p className="mt-2 text-sm text-slate-500">
                  The country or territory you select here will be displayed as
                  the country flag on your profile.
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Country of Residence <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.countryResidence}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      countryResidence: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                  required
                >
                  <option value="">- Select -</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="IN">India</option>
                  <option value="PH">Philippines</option>
                  <option value="NG">Nigeria</option>
                </select>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Experience
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  What year did you start working in the Substance Use field?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.experienceYear}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      experienceYear: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                  required
                >
                  <option value="">Select year</option>
                  {Array.from(
                    {
                      length: 87
                    },
                    (_, i) => 2026 - i
                  ).map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Areas of Work - Prevention
                </label>
                <p className="text-sm text-slate-500 mb-3">
                  (More than one option can be selected)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Programme Delivery",
                    "Education (for under 18yr olds)",
                    "Training/Further Education",
                    "Social Services",
                    "Funding",
                    "Policy",
                    "Research",
                    "Monitoring and Evaluation",
                    "Medical/Health",
                    "Law Enforcement",
                    "Media/Communications",
                    "Student/Youth",
                    "Other"
                  ].map(area => (
                    <label key={area} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.areasOfWorkPrevention.includes(area)}
                        onChange={() =>
                          handleCheckboxChange("areasOfWorkPrevention", area)
                        }
                        className="w-4 h-4 text-slate-900 border-slate-300 rounded focus:ring-slate-500"
                      />
                      <span className="ml-3 text-slate-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Areas of Work - Treatment
                </label>
                <p className="text-sm text-slate-500 mb-3">
                  (More than one option can be selected)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Programme Delivery",
                    "Education (for under 18yr olds)",
                    "Training/Further Education",
                    "Social Services",
                    "Funding",
                    "Policy",
                    "Research",
                    "Monitoring and Evaluation",
                    "Medical/Health",
                    "Law Enforcement",
                    "Media/Communications",
                    "Student/Youth",
                    "Other"
                  ].map(area => (
                    <label key={area} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.areasOfWorkTreatment.includes(area)}
                        onChange={() =>
                          handleCheckboxChange("areasOfWorkTreatment", area)
                        }
                        className="w-4 h-4 text-slate-900 border-slate-300 rounded focus:ring-slate-500"
                      />
                      <span className="ml-3 text-slate-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Areas of Interest
                </label>
                <p className="text-sm text-slate-500 mb-3">
                  (More than one option can be selected)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "School",
                    "Prison",
                    "Treatment Centre",
                    "Further Education",
                    "Community",
                    "Family",
                    "Youth",
                    "Recovery",
                    "Medical",
                    "Population Wide",
                    "Other"
                  ].map(area => (
                    <label key={area} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.areasOfInterest.includes(area)}
                        onChange={() =>
                          handleCheckboxChange("areasOfInterest", area)
                        }
                        className="w-4 h-4 text-slate-900 border-slate-300 rounded focus:ring-slate-500"
                      />
                      <span className="ml-3 text-slate-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Have you ever completed UTC/UPC training?
                </label>
                <div className="space-y-2">
                  {["Yes", "No"].map(option => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="completedTraining"
                        value={option.toLowerCase()}
                        checked={
                          formData.completedTraining === option.toLowerCase()
                        }
                        onChange={e =>
                          setFormData({
                            ...formData,
                            completedTraining: e.target.value
                          })
                        }
                        className="w-4 h-4 text-slate-900 border-slate-300 focus:ring-slate-500"
                      />
                      <span className="ml-3 text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Qualifications & Profile Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Qualifications & Profile
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Please list any academic qualifications
                </label>
                <textarea
                  value={formData.academicQualifications}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      academicQualifications: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                  rows={4}
                  placeholder="E.g. Undergraduate/Postgraduate study, or any other relevant vocational certification/s"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Short Profile/Bio <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.shortBio}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      shortBio: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none"
                  rows={6}
                  placeholder="Please give a brief description of your work and interest in the field..."
                  required
                />
                <p className="mt-2 text-sm text-slate-500">
                  Please provide at least 20 words if you are applying for
                  Student/Regular certification, 50 words if you are applying
                  for Professional certification.
                </p>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Newsletter Subscription
            </h2>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      newsletter: e.target.checked
                    })
                  }
                  className="w-5 h-5 text-slate-900 border-slate-300 rounded focus:ring-slate-500 mt-1"
                />
                <div className="ml-3">
                  <span className="font-semibold text-slate-900">
                    Would you like to receive the Universal Curricula
                    newsletter?
                  </span>
                  <p className="text-sm text-slate-600 mt-2">
                    Email newsletters are sent up to three times a month. You
                    can change your mind at any time by clicking the unsubscribe
                    link in the footer of the newsletter.
                  </p>
                </div>
              </label>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-6 border-t border-slate-200">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-slate-800 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-sm"
            >
              <CheckCircle className="w-5 h-5" />
              Create Account
            </button>
            <p className="text-center text-sm text-slate-500 mt-4">
              Your application will be reviewed within 5-7 business days
            </p>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
