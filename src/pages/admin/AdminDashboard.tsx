
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, News, Trophy } from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Players",
      value: "25",
      icon: Users,
      color: "bg-blue-500/20 text-blue-200"
    },
    {
      title: "Upcoming Matches",
      value: "3",
      icon: Calendar,
      color: "bg-green-500/20 text-green-200"
    },
    {
      title: "News Articles",
      value: "12",
      icon: News,
      color: "bg-purple-500/20 text-purple-200"
    },
    {
      title: "League Position",
      value: "1st",
      icon: Trophy,
      color: "bg-yellow-500/20 text-yellow-200"
    }
  ];

  const recentActivities = [
    { action: "Added new player: Ahmed Hassan", time: "2 hours ago" },
    { action: "Updated match result vs City United", time: "5 hours ago" },
    { action: "Published news article about training camp", time: "1 day ago" },
    { action: "Updated league standings", time: "2 days ago" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white mb-6">Dashboard Overview</h2>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="backdrop-blur-md bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">{stat.title}</p>
                      <p className="text-white text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activities */}
        <Card className="backdrop-blur-md bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-white">{activity.action}</span>
                  <span className="text-white/60 text-sm">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/15 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <News className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Add News Article</h3>
              <p className="text-white/70 text-sm">Create and publish new content</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/15 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Add New Player</h3>
              <p className="text-white/70 text-sm">Register a new team member</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/15 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Schedule Match</h3>
              <p className="text-white/70 text-sm">Add upcoming fixture</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
