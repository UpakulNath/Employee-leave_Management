function DashboardCards({ title, value, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">
            {title}
          </h3>

          <h2 className={`text-4xl font-bold mt-2 ${color}`}>
            {value}
          </h2>
        </div>

        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center ${color.replace(
            "text",
            "bg"
          )} bg-opacity-10`}
        >
          <span className="text-2xl">📄</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;