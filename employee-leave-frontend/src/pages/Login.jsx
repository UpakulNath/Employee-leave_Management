import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const { token, employee } = response.data;

      // Store JWT
      localStorage.setItem("token", token);

      // Store logged-in employee details
      localStorage.setItem("user", JSON.stringify(employee));

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (error) {
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 antialiased">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-12">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="h-8 w-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-white">
                Ω
              </div>
              <span className="font-semibold tracking-wide text-sm uppercase">
                TalentFlow
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight leading-tight mb-4">
              Employee Leave
              <br />
              Management System
            </h1>

            <p className="text-blue-100 leading-relaxed max-w-sm">
              Streamline leave requests, monitor balances, and manage team
              calendars through our unified enterprise portal.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-blue-50">
              <svg
                className="h-5 w-5 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Automated Accruals & Policy Tracking</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-blue-50">
              <svg
                className="h-5 w-5 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Real-time Manager Approval Workflows</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-blue-50">
              <svg
                className="h-5 w-5 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Secure Single Sign-On (SSO) Support</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 sm:p-16 flex flex-col justify-center">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Welcome back
            </h2>

            <p className="text-slate-500 text-sm mt-2">
              Please enter your corporate credentials to access your dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
              >
                Corporate Email
              </label>

              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                />
                <span>Remember this device</span>
              </label>

              <button
                type="button"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Forgot password?
              </button>

            </div>

            {error && (
              <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white py-3 rounded-xl font-medium shadow-sm hover:shadow-md transition duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

          </form>

          <div className="relative flex items-center my-8">
            <div className="flex-1 h-px bg-slate-200"></div>

            <span className="mx-4 text-xs font-medium text-slate-400 uppercase tracking-wider bg-white px-2">
              New to the platform?
            </span>

            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          <p className="text-center text-sm text-slate-600">
            Contact your HR administrator or{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-semibold hover:text-indigo-700 hover:underline"
            >
              Request an account
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;