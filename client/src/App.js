import Landing from "./Pages/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Register from "./Pages/Register/Register";
import Error from "./Pages/Error/Error";
import ProtectedRoute from "./Components/ProtectedRoute";
import Profile from "./Pages/Profile/Profile";
import AddJobs from "./Pages/AddJobs/AddJobs";
import AllJob from "./Components/AllJob";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route index path="/landing" element={<Landing />} />
          <Route path="/addjob" element={<AddJobs />} />
          <Route path="/alljob" element={<AllJob />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
