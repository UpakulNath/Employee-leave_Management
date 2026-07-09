import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen">

      <div className="h-16 flex items-center justify-center border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">
          ELMS
        </h1>
      </div>

      <nav className="mt-8 px-4 space-y-2">

        <Link
          to="/dashboard"
          className="block px-4 py-3 rounded-xl hover:bg-slate-700"
        >
          Dashboard
        </Link>

        <Link
          to="/apply-leave"
          className="block px-4 py-3 rounded-xl hover:bg-slate-700"
        >
          Apply Leave
        </Link>

        <Link
          to="/leave-history"
          className="block px-4 py-3 rounded-xl hover:bg-slate-700"
        >
          Leave History
        </Link>

        <Link
          to="/profile"
          className="block px-4 py-3 rounded-xl hover:bg-slate-700"
        >
          Profile
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;