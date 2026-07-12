import DashboardCards from "../components/DashboardCards";
import LeaveTable from "../components/LeaveTable";

function Dashboard() {
  return (
    <div>
      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>

        <p className="text-gray-500 mt-2">Welcome back, John Doe 👋</p>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <DashboardCards title="Leave Balance" value="12" color="text-blue-600" />

        <DashboardCards title="Pending Requests" value="2" color="text-yellow-500" />

        <DashboardCards title="Approved Leaves" value="8" color="text-green-600" />

        <DashboardCards title="Rejected Leaves" value="1" color="text-red-600" />
      </div>

      {/* Table */}

      <LeaveTable />
    </div>
  );
}

export default Dashboard;