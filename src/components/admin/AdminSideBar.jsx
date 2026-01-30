import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  Home,
  Users,
  BookOpen,
  GraduationCap,
  UserPlus,
  Award,
  Newspaper,
  BarChart3,
  Settings,
  LogOut,
  X
} from "lucide-react"

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
    badge: null
  },
  {
    id: "users",
    label: "User Management",
    icon: Users,
    badge: 4
  },
  {
    id: "curricula",
    label: "Curricula",
    icon: BookOpen,
    badge: null
  },
  {
    id: "courses",
    label: "Courses",
    icon: GraduationCap,
    badge: 3
  },
  {
    id: "enrollments",
    label: "Enrollments",
    icon: UserPlus,
    badge: null
  },
  {
    id: "certifications",
    label: "Certifications",
    icon: Award,
    badge: 4
  },
  {
    id: "content",
    label: "Content & News",
    icon: Newspaper,
    badge: null
  },
  {
    id: "reports",
    label: "Reports & Analytics",
    icon: BarChart3,
    badge: null
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    badge: null
  }
]

export function AdminSideBar({ currentPage, collapsed, setCollapsed, sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  // Auto-collapse on screens smaller than md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // md breakpoint is 768px
        setCollapsed(true)
      } else {
        setCollapsed(false)
      }
    }

    // Set initial state
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [setCollapsed])

  const handleNavigation = (itemId) => {
    const path = itemId === 'dashboard' ? '/admin' : `/admin/${itemId}`;
    navigate(path);
    setSidebarOpen(false); // Close sidebar on mobile after click
  }

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 bg-slate-900 transform transition-all duration-300 lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } ${collapsed ? "w-20" : "w-64"}`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          {!collapsed ? (
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm">
                  Universal Curricula
                </span>
                <span className="text-xs text-slate-400">Admin Panel</span>
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                UC
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`w-full flex items-center ${
                collapsed ? "justify-center" : "justify-between"
              } px-4 py-3 rounded-lg transition-colors relative group ${
                currentPage === item.id
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
              title={collapsed ? item.label : ""}
            >
              <div className={`flex items-center ${collapsed ? "" : "gap-3"}`}>
                <item.icon className="w-5 h-5" />
                {!collapsed && (
                  <span className="font-medium text-sm">{item.label}</span>
                )}
              </div>
              {item.badge && !collapsed && (
                <span className="hidden md:inline-flex px-2 py-1 rounded-full bg-white text-orange-500 text-xs font-bold ">
                  {item.badge}
                </span>
              )}
              {item.badge && collapsed && (
                <span className="hidden md:inline px-1 text-orange-500 text-xs font-bold">
                  {item.badge}
                </span>
              )}
              
              {/* Tooltip for collapsed state */}
              {collapsed && (
                <div className="absolute left-full ml-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                  {item.label}
                  {item.badge && (
                    <span className="ml-2 px-2 py-0.5 bg-orange-500 text-white text-xs font-bold rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-800">
          {!collapsed ? (
            <>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white font-semibold">
                  AD
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white">
                    Admin User
                  </div>
                  <div className="text-xs text-slate-400">Super Admin</div>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors text-sm">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white font-semibold">
                AD
              </div>
              <button className="p-2 bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors" title="Logout">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
