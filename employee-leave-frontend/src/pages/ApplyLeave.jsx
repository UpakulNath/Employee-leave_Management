import LeaveForm from "../components/LeaveForm";
import LeaveBalanceCard from "../components/LeaveBalanceCard";

function ApplyLeave() {
  return (
    <div>

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold text-gray-800">
          Apply Leave
        </h1>

        <p className="text-gray-500 mt-2">
          Submit your leave request using the form below.
        </p>

      </div>

      {/* Layout */}
      <div className="grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2">
          <LeaveForm />
        </div>

        <div>
          <LeaveBalanceCard />
        </div>

      </div>

    </div>
  );
}

export default ApplyLeave;