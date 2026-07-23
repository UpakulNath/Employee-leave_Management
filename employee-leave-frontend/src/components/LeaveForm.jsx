import { useState } from "react";
import api from "../api/axios";

function LeaveForm() {
  const [formData, setFormData] = useState({
    leaveType: "Casual",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (new Date(formData.endDate) < new Date(formData.startDate)) {
      setError("End date cannot be before start date.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/leave/apply", formData);

      setMessage(response.data.message);

      setFormData({
        leaveType: "Casual",
        startDate: "",
        endDate: "",
        reason: "",
      });

    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to submit leave request."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Apply for Leave
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Leave Type */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Leave Type
          </label>

          <select
            name="leaveType"
            value={formData.leaveType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="Casual">Casual Leave</option>
            <option value="Medical">Medical Leave</option>
            <option value="Earned">Earned Leave</option>
            <option value="Maternity">Maternity Leave</option>
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
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              End Date
            </label>

            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
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
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Enter your reason..."
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* File Upload */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Medical Certificate (Coming Soon)
          </label>

          <input
            type="file"
            disabled
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 cursor-not-allowed"
          />

          <p className="text-xs text-gray-500 mt-1">
            File upload will be added in a future update.
          </p>
        </div>

        {/* Success */}

        {message && (
          <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
            {message}
          </div>
        )}

        {/* Error */}

        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-xl font-semibold transition"
        >
          {loading ? "Submitting..." : "Submit Leave Request"}
        </button>

      </form>
    </div>
  );
}

export default LeaveForm;