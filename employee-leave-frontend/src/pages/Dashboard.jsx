import { useEffect, useState } from "react";
import DashboardCards from "../components/DashboardCards";
import LeaveTable from "../components/LeaveTable";
import api from "../api/axios";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await api.get("/employee/dashboard");
        setDashboardData(response.data);
      } catch (error) {
        console.error(error);
        setError("Failed to load dashboard.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h2 className="text-2xl font-semibold text-gray-600">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h2 className="text-2xl font-semibold text-red-600">
          {error}
        </h2>
      </div>
    );
  }

  return (
    <div>
      {/* Dashboard Heading */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back, {dashboardData.employee.name} 👋
        </p>
      </div>

      {/* Leave Balance */}

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Leave Balance
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCards
          title="Casual Leave"
          value={dashboardData.employee.leaveBalance.casual}
          color="text-blue-600"
        />

        <DashboardCards
          title="Medical Leave"
          value={dashboardData.employee.leaveBalance.medical}
          color="text-green-600"
        />

        <DashboardCards
          title="Earned Leave"
          value={dashboardData.employee.leaveBalance.earned}
          color="text-purple-600"
        />

        <DashboardCards
          title="Maternity Leave"
          value={dashboardData.employee.leaveBalance.maternity}
          color="text-pink-600"
        />

      </div>

      {/* Leave Statistics */}

      <h2 className="text-xl font-semibold text-gray-700 mt-10 mb-4">
        Leave Statistics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <DashboardCards
          title="Pending Requests"
          value={dashboardData.stats.pending}
          color="text-yellow-500"
        />

        <DashboardCards
          title="Approved Leaves"
          value={dashboardData.stats.approved}
          color="text-green-600"
        />

        <DashboardCards
          title="Rejected Leaves"
          value={dashboardData.stats.rejected}
          color="text-red-600"
        />

      </div>

      {/* Recent Leave Requests */}

      <div className="mt-10">
        <LeaveTable leaves={dashboardData.recentLeaves} />
      </div>
    </div>
  );
}

export default Dashboard;