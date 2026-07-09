import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";



import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route
        path="/register"
        element={<Register />}
      />

      

      <Route element={<DashboardLayout />}>

        
      <Route
          path="/dashboard"
          element={<Dashboard />}
        />
       

      </Route>

    </Routes>
  );
}

export default App;