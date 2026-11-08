import { Routes, Route, NavLink, } from "react-router-dom";
import Home from "./pages/Home/home"
import About from "./pages/About/about"
import Project from "./pages/Projects/project"
import Contact from "./pages/Contact/contact"
import Blogs from "./pages/Blogs/blogs"
import Login from "./pages/Login/login"
import Dashboard from "./pages/Dashboard/dashboard";

function App() {

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/project">Project</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blogs/:id" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App
