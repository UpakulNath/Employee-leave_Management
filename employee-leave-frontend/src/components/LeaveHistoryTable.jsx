const leaveHistory = [
  {
    id: 1,
    type: "Casual Leave",
    from: "10 Jul 2026",
    to: "12 Jul 2026",
    days: 3,
    status: "Approved",
    appliedOn: "05 Jul 2026",
  },
  {
    id: 2,
    type: "Medical Leave",
    from: "20 Jul 2026",
    to: "22 Jul 2026",
    days: 3,
    status: "Pending",
    appliedOn: "18 Jul 2026",
  },
  {
    id: 3,
    type: "Earned Leave",
    from: "02 Aug 2026",
    to: "05 Aug 2026",
    days: 4,
    status: "Rejected",
    appliedOn: "28 Jul 2026",
  },
];

function LeaveHistoryTable() {
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

            </tr>

          </thead>

          <tbody>

            {leaveHistory.map((leave) => (

              <tr
                key={leave.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-4">{leave.type}</td>

                <td>{leave.from}</td>

                <td>{leave.to}</td>

                <td>{leave.days}</td>

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

                <td>{leave.appliedOn}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default LeaveHistoryTable;