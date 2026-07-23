function LeaveHistoryTable({ leaves }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Leave Applications
        </h2>

        <input
          type="text"
          placeholder="Search..."
          className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {leaves.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No leave history found.
        </div>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b text-left">

                <th className="py-4">Leave Type</th>
                <th>From</th>
                <th>To</th>
                <th>Days</th>
                <th>Status</th>
                <th>Applied On</th>
                <th>Remarks</th>

              </tr>

            </thead>

            <tbody>

              {leaves.map((leave) => (

                <tr
                  key={leave._id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="py-4">
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
                    {formatDate(leave.createdAt)}
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

export default LeaveHistoryTable;