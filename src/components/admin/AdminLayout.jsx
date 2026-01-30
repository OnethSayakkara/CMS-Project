import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { TopBar } from "./TopBar";
import { AdminSideBar } from "./AdminSideBar";

const AdminLayout = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Get current page from URL path
  const currentPage = location.pathname.split('/').pop() || 'dashboard';

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <AdminSideBar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentPage={currentPage}
      />

      {/* Main Content Area */}
      <div className={`transition-all duration-300 ${collapsed ? "lg:pl-20" : "lg:pl-64"}`}>
        {/* Top Bar */}
        <TopBar 
          collapsed={collapsed}
          setSidebarOpen={setSidebarOpen}
          currentPage={currentPage}
        />

        {/* Page Content */}
        <main className="p-4 lg:p-8">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}
    </div>
  );
};

export default AdminLayout;
