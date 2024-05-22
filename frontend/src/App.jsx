// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import AdminDashboard from "./views/AdminDashboard";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import RootLayout from "./views/Root";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-page" element={<ContactPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
