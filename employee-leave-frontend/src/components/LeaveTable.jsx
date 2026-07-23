function LeaveTable({ leaves }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Recent Leave Requests
      </h2>

      {leaves.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No leave requests found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">

            <thead>
              <tr className="border-b text-gray-600">

                <th className="text-left py-4">Leave Type</th>

                <th className="text-left py-4">From</th>

                <th className="text-left py-4">To</th>

                <th className="text-left py-4">Days</th>

                <th className="text-left py-4">Status</th>

                <th className="text-left py-4">Remarks</th>

              </tr>
            </thead>

            <tbody>

              {leaves.map((leave) => (

                <tr
                  key={leave._id}
                  className="border-b hover:bg-gray-50 transition"
                >

                  <td className="py-4 font-medium">
                    {leave.leaveType}
                  </td>

                  <td>
                    {formatDate(leave.startDate)}
                  </td>

                  <td>
                    {formatDate(leave.endDate)}
                  </td>

                  <td>
                    {leave.numberOfDays}
                  </td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium
                        ${
                          leave.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : leave.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {leave.status}
                    </span>
                  </td>

                  <td>
                    {leave.remarks || "-"}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>
        </div>
      )}
    </div>
  );
}

export default LeaveTable;