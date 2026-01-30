import React, { useEffect, useState } from 'react'
import {
  ArrowRight,
  ChevronRight,
  Home,
  Info,
  ClipboardCheck,
  BookOpen,
  FileText,
  Star,
  Award,
  Lock,
  Check,
  Download,
  Share2,
  Bookmark,
  Clock,
  Globe,
  Users,
  Heart,
  Briefcase,
  GraduationCap,
} from 'lucide-react'
export function CourseIntroPage() {
  const [showStickyButton, setShowStickyButton] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const handleStartCertification = () => {
    window.location.href = '/course/urc/pretest'
  }
  const learningSteps = [
    {
      step: 1,
      title: 'Course Introduction',
      description: 'Learn about the program structure and requirements',
      icon: Info,
      status: 'unlocked',
      badge: 'You Are Here',
      badgeColor: 'bg-blue-100 text-blue-700',
    },
    {
      step: 2,
      title: 'Pre-Test Survey',
      description: 'Complete mandatory pre-test assessment to begin',
      icon: ClipboardCheck,
      status: 'locked',
      badge: 'Next Step',
      badgeColor: 'bg-orange-100 text-orange-700',
    },
    {
      step: 3,
      title: 'Learning Materials',
      description: 'Access 3 comprehensive PDF training modules',
      icon: BookOpen,
      status: 'locked',
      subItems: [
        'PDF Module 01: Introduction to Recovery Support',
        'PDF Module 02: Peer Support Methodologies',
        'PDF Module 03: Professional Ethics & Boundaries',
      ],
      features: 'View online + Download',
    },
    {
      step: 4,
      title: 'End Test / Assessment',
      description: 'Demonstrate your knowledge with final assessment',
      icon: FileText,
      status: 'locked',
      passingScore: '70%',
    },
    {
      step: 5,
      title: 'Feedback Survey',
      description: 'Share your experience to help improve the program',
      icon: Star,
      status: 'locked',
      badge: 'Mandatory',
      badgeColor: 'bg-purple-100 text-purple-700',
    },
    {
      step: 6,
      title: 'Certificate Eligibility',
      description: 'Receive your certification upon successful completion',
      icon: Award,
      status: 'locked',
      badge: 'Final Step',
      badgeColor: 'bg-green-100 text-green-700',
    },
  ]
  const targetAudience = [
    {
      title: 'Healthcare Workers',
      icon: Heart,
      description: 'Medical professionals supporting recovery',
    },
    {
      title: 'Social Workers',
      icon: Users,
      description: 'Community support specialists',
    },
    {
      title: 'Individuals in Recovery',
      icon: GraduationCap,
      description: 'Those with lived experience',
    },
    {
      title: 'Community Support Workers',
      icon: Users,
      description: 'Grassroots support providers',
    },
    {
      title: 'Family Members',
      icon: Heart,
      description: 'Wanting to help loved ones',
    },
    {
      title: 'Professional Counselors',
      icon: Briefcase,
      description: 'Licensed mental health professionals',
    },
  ]
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <a
              href="/"
              className="text-slate-600 hover:text-purple-600 flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              Home
            </a>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <a
              href="/#programs"
              className="text-slate-600 hover:text-purple-600"
            >
              Programs
            </a>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 font-medium">
              Universal Recovery Curriculum
            </span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-green-500/30 border border-green-400/30 backdrop-blur-sm rounded-full text-sm font-semibold mb-2">
                URC Certification
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Universal Recovery Curriculum
              </h1>
              <p className="text-xl text-green-100 mt-2">
                Train Others to Provide Compassionate Recovery Support
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional training environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Program Overview
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The Universal Recovery Curriculum (URC) is designed to equip
                professionals with the core competencies needed to provide
                effective recovery support services. This internationally
                recognized certification prepares you to train others in
                evidence-based recovery support methodologies.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Whether you're in recovery yourself or an ally supporting
                others, this program provides the knowledge and skills to make a
                lasting impact in your community through professional training.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <Clock className="w-6 h-6 text-blue-600 mb-2" />
                  <div className="text-sm text-slate-600">Training Hours</div>
                  <div className="text-xl font-bold text-slate-900">
                    40 hours
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <Award className="w-6 h-6 text-green-600 mb-2" />
                  <div className="text-sm text-slate-600">Certification</div>
                  <div className="text-xl font-bold text-slate-900">
                    International
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <Globe className="w-6 h-6 text-purple-600 mb-2" />
                  <div className="text-sm text-slate-600">Language</div>
                  <div className="text-xl font-bold text-slate-900">
                    English
                  </div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                  <BookOpen className="w-6 h-6 text-indigo-600 mb-2" />
                  <div className="text-sm text-slate-600">Format</div>
                  <div className="text-xl font-bold text-slate-900">
                    Self-paced
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            About Universal Recovery Curriculum
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600 space-y-4">
            <p className="leading-relaxed">
              Recovery from substance use disorders is more than just not using
              alcohol or other substances. It is more than just going through
              substance use disorder treatment. It is a long-term process of
              learning to live life and solve problems without alcohol or other
              drugs. Long-term support is often necessary for individuals with
              substance use disorders to achieve and sustain recovery.
            </p>
            <p className="leading-relaxed">
              Both of the URC courses focus on equipping participants with core
              competencies and skills to work as a recovery support
              professional. One course is designed for those individuals who
              themselves are in recovery from a substance use disorder and the
              other is for those individuals who do not identify as being in
              recovery.
            </p>
          </div>
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Core Competencies You'll Gain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: 'Recovery Support Professional Skills',
                description:
                  'Master the fundamentals of providing effective recovery support',
              },
              {
                icon: Heart,
                title: 'Trauma-Informed Care Awareness',
                description: 'Understand and apply trauma-informed approaches',
              },
              {
                icon: Award,
                title: 'Self-Care & Boundary Setting',
                description:
                  'Learn to maintain professional boundaries and prevent burnout',
              },
              {
                icon: Users,
                title: 'Peer Support Methodologies',
                description:
                  'Evidence-based peer support techniques and best practices',
              },
              {
                icon: GraduationCap,
                title: 'Professional Certification Preparation',
                description: 'Prepare for GCCC certification exam',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certification Tracks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Choose Your Certification Track
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-200 hover:border-green-400 transition-colors">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-2">
                URC 1
              </div>
              <h3 className="text-2xl font-bold mb-2">The PEER Model</h3>
              <p className="text-green-100">
                Peer Experiences Empower Recovery
              </p>
            </div>
            <div className="p-6">
              <p className="text-slate-600 mb-6">
                Designed for individuals in recovery who want to become
                certified recovery support professionals and train others using
                their lived experience.
              </p>
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-slate-400" />
                <span className="text-sm text-slate-600">
                  10 weeks • Self-paced
                </span>
              </div>
              <button
                onClick={handleStartCertification}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Choose This Track
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-2">
                URC 2
              </div>
              <h3 className="text-2xl font-bold mb-2">
                The Recovery Allies Model
              </h3>
              <p className="text-blue-100">
                Allies Link and Lend Inventive Engaging Support
              </p>
            </div>
            <div className="p-6">
              <p className="text-slate-600 mb-6">
                Designed for individuals NOT in recovery who want to support
                others professionally and train recovery support workers in
                their communities.
              </p>
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-slate-400" />
                <span className="text-sm text-slate-600">
                  10 weeks • Self-paced
                </span>
              </div>
              <button
                onClick={handleStartCertification}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Choose This Track
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
          <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <p className="text-slate-700 mb-2">
            <strong>Certification Benefits:</strong> Upon successful completion,
            you will be eligible to sit for the Global Centre for Credentialing
            and Certification (GCCC) exam.
          </p>
          <a
            href="https://www.globalccc.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Learn more at www.globalccc.org →
          </a>
        </div>
      </div>

      {/* Learning Journey */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Your Certification Journey
        </h2>
        <div className="space-y-4">
          {learningSteps.map((step, index) => (
            <div
              key={step.step}
              className={`bg-white rounded-xl shadow-md p-6 border-2 ${step.status === 'unlocked' ? 'border-green-200' : 'border-slate-200'}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${step.status === 'unlocked' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}
                >
                  {step.status === 'unlocked' ? (
                    <step.icon className="w-6 h-6" />
                  ) : (
                    <Lock className="w-6 h-6" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-slate-500">
                      STEP {step.step}
                    </span>
                    {step.badge && (
                      <span
                        className={`px-3 py-1 ${step.badgeColor} text-xs font-semibold rounded-full`}
                      >
                        {step.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 mb-3">{step.description}</p>

                  {step.subItems && (
                    <ul className="space-y-2 mb-3">
                      {step.subItems.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-slate-600"
                        >
                          <FileText className="w-4 h-4 text-slate-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {step.features && (
                    <div className="text-sm text-slate-500 italic">
                      Features: {step.features}
                    </div>
                  )}

                  {step.passingScore && (
                    <div className="text-sm font-medium text-green-600">
                      Passing score: {step.passingScore}
                    </div>
                  )}
                </div>

                {step.status === 'unlocked' && (
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Certification Journey
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of certified trainers making a global impact through
            evidence-based recovery support.
          </p>
          <button
            onClick={handleStartCertification}
            className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
          >
            Begin Pre-Test Assessment
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <p className="mt-6 text-purple-200 text-sm">
            Takes approximately 15 minutes • No time limit
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Prerequisites & Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-slate-900">
                  No Prerequisite Training
                </div>
                <div className="text-sm text-slate-600">
                  Open to all professionals
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-slate-900">
                  Self-Paced Learning
                </div>
                <div className="text-sm text-slate-600">
                  Study on your schedule
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-slate-900">
                  Internet Connection
                </div>
                <div className="text-sm text-slate-600">
                  Required for online access
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-slate-900">
                  Time Commitment
                </div>
                <div className="text-sm text-slate-600">
                  40 hours over 10 weeks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who Should Enroll */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Who Should Enroll
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudience.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <audience.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {audience.title}
              </h3>
              <p className="text-slate-600 text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Materials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
          <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Preview Course Materials
          </h3>
          <p className="text-slate-600 mb-6">
            Download a sample training manual to see what you'll learn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Download Sample PDF
            </button>
            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              See Example Module
            </button>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-br from-green-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Start your journey to becoming a certified recovery support trainer
            today.
          </p>
          <button
            onClick={handleStartCertification}
            className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transition-all duration-300 shadow-lg text-lg"
          >
            Begin Certification
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Sticky Button */}
      {showStickyButton && (
        <button
          onClick={handleStartCertification}
          className="fixed bottom-8 right-8 z-40 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
        >
          Begin Pre-Test
          <ArrowRight className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
