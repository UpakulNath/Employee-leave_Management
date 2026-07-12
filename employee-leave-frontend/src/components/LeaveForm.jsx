function LeaveForm() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Apply for Leave
      </h2>

      <form className="space-y-6">

        {/* Leave Type */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Leave Type
          </label>

          <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option>Casual Leave</option>
            <option>Medical Leave</option>
            <option>Earned Leave</option>
            <option>Maternity Leave</option>
          </select>
        </div>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Start Date
            </label>

            <input
              type="date"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              End Date
            </label>

            <input
              type="date"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

        </div>

        {/* Reason */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Reason
          </label>

          <textarea
            rows="5"
            placeholder="Enter your reason..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Medical Certificate (Optional)
          </label>

          <input
            type="file"
            className="w-full border border-gray-300 rounded-xl px-4 py-3"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Submit Leave Request
        </button>

      </form>

    </div>
  );
}

export default LeaveForm;