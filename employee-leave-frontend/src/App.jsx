import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ApplyLeave from "./pages/ApplyLeave";

import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <Routes>

      {/* Authentication Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Employee Routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/apply-Leave" element={<ApplyLeave />} />
      </Route>

    </Routes>
  );
}

export default App;