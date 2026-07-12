function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8">

      <div className="flex flex-col md:flex-row gap-8">

        {/* Left */}

        <div className="flex flex-col items-center">

          <img
            src="https://i.pravatar.cc/200?img=12"
            alt="profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
          />

          <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition">
            Edit Profile
          </button>

        </div>

        {/* Right */}

        <div className="flex-1">

          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Employee Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <InfoItem
              label="Full Name"
              value="John Doe"
            />

            <InfoItem
              label="Employee ID"
              value="EMP001"
            />

            <InfoItem
              label="Department"
              value="Human Resources"
            />

            <InfoItem
              label="Designation"
              value="HR Executive"
            />

            <InfoItem
              label="Email"
              value="john@company.com"
            />

            <InfoItem
              label="Phone"
              value="+91 9876543210"
            />

            <InfoItem
              label="Address"
              value="Guwahati, Assam"
            />

            <InfoItem
              label="Joining Date"
              value="15 Jan 2025"
            />

          </div>

        </div>

      </div>

      {/* Divider */}

      <hr className="my-10" />

      {/* Emergency Contact */}

      <div>

        <h2 className="text-2xl font-bold mb-5">
          Emergency Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <InfoItem
            label="Name"
            value="Jane Doe"
          />

          <InfoItem
            label="Phone"
            value="+91 9123456789"
          />

        </div>

      </div>

    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div>

      <p className="text-gray-500 text-sm">
        {label}
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-1">
        {value}
      </h3>

    </div>
  );
}

export default ProfileCard;