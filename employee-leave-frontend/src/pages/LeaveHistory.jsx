import LeaveHistoryTable from "../components/LeaveHistoryTable";

function LeaveHistory() {
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

      <LeaveHistoryTable />

    </div>
  );
}

export default LeaveHistory;