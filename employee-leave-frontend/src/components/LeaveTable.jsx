const leaves = [
  {
    id: 1,
    type: "Casual Leave",
    from: "10 Jul 2026",
    to: "12 Jul 2026",
    status: "Approved",
  },
  {
    id: 2,
    type: "Medical Leave",
    from: "20 Jul 2026",
    to: "22 Jul 2026",
    status: "Pending",
  },
  {
    id: 3,
    type: "Earned Leave",
    from: "05 Aug 2026",
    to: "09 Aug 2026",
    status: "Rejected",
  },
];

function LeaveTable() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Recent Leave Requests
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-4">Leave Type</th>

              <th className="text-left py-4">From</th>

              <th className="text-left py-4">To</th>

              <th className="text-left py-4">Status</th>

            </tr>

          </thead>

          <tbody>

            {leaves.map((leave) => (

              <tr
                key={leave.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-4">{leave.type}</td>

                <td>{leave.from}</td>

                <td>{leave.to}</td>

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

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default LeaveTable;