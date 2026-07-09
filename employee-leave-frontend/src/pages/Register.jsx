import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center bg-indigo-600 text-white p-12">
          <h1 className="text-5xl font-bold leading-tight">
            Join Our
            <br />
            Organization
          </h1>

          <p className="mt-6 text-lg text-indigo-100 leading-8">
            Create your employee account to apply for leave, track requests,
            and manage your profile from one secure platform.
          </p>

          <div className="mt-12 space-y-5">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </div>
              <span>Easy Registration</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </div>
              <span>Track Leave Requests</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </div>
              <span>Secure Employee Dashboard</span>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 md:p-12">

          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 mt-2">
              Fill in your details to register.
            </p>
          </div>

          <form className="space-y-5">

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Department
                </label>

                <input
                  type="text"
                  placeholder="Human Resources"
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Employee ID
                </label>

                <input
                  type="text"
                  placeholder="EMP001"
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" />

              <span>
                I agree to the Terms & Conditions and Privacy Policy.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold text-lg transition"
            >
              Create Account
            </button>

          </form>

          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="mx-4 text-gray-400 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <p className="text-center text-gray-600">
            Already have an account?

            <Link
              to="/"
              className="ml-2 text-indigo-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Register;