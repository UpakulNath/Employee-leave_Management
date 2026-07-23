import { useEffect, useState } from "react";
import LeaveHistoryTable from "../components/LeaveHistoryTable";
import api from "../api/axios";

function LeaveHistory() {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeaveHistory = async () => {
      try {
        const response = await api.get("/leave/my-leaves");
        setLeaves(response.data.leaves);
      } catch (err) {
        setError(
          err.response?.data?.message ||
          "Failed to load leave history."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchLeaveHistory();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-lg font-semibold">
        Loading Leave History...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-gray-800">
          Leave History
        </h1>

        <p className="text-gray-500 mt-2">
          View all your previous leave requests.
        </p>

      </div>

      <LeaveHistoryTable leaves={leaves} />

    </div>
  );
}

export default LeaveHistory;