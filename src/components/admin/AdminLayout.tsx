
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, Calendar, News, List, LogOut } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: List },
    { name: "News Management", href: "/admin/news", icon: News },
    { name: "Player Management", href: "/admin/players", icon: Users },
    { name: "Match Management", href: "/admin/matches", icon: Calendar },
    { name: "League Management", href: "/admin/league", icon: List },
  ];

  const handleLogout = () => {
    // In real app, clear authentication tokens
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? "w-64" : "w-16"} transition-all duration-300 min-h-screen backdrop-blur-md bg-black/20 border-r border-white/10`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <div className={`flex items-center space-x-3 ${!sidebarOpen && "justify-center"}`}>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FC</span>
                </div>
                {sidebarOpen && <span className="text-white font-bold">Admin Panel</span>}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-white hover:bg-white/10"
              >
                {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-white/20 text-white" 
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    } ${!sidebarOpen && "justify-center"}`}
                  >
                    <Icon className="w-5 h-5" />
                    {sidebarOpen && <span>{item.name}</span>}
                  </Link>
                );
              })}
            </nav>

            <div className="absolute bottom-4 left-4 right-4">
              <Button
                onClick={handleLogout}
                variant="ghost"
                className={`text-white/70 hover:bg-red-500/20 hover:text-red-200 w-full ${!sidebarOpen && "px-2"}`}
              >
                <LogOut className="w-5 h-5" />
                {sidebarOpen && <span className="ml-3">Logout</span>}
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <header className="backdrop-blur-md bg-white/5 border-b border-white/10 p-4">
            <h1 className="text-white text-xl font-semibold">Football Club Admin</h1>
          </header>
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
