function LeaveBalanceCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Leave Balance
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between items-center">
          <span className="text-gray-600">
            Casual Leave
          </span>

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
            10
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">
            Medical Leave
          </span>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
            8
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">
            Earned Leave
          </span>

          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">
            15
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">
            Unpaid Leave
          </span>

          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold">
            Unlimited
          </span>
        </div>

      </div>

    </div>
  );
}

export default LeaveBalanceCard;