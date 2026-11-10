import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome/welcome";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/dashboard";
import Movies from "./pages/Movies/Movies";
import MovieDetail from "./pages/Movies/MovieDetail"
import Products from "./pages/Products/products";
import Succes from "./pages/Success/succes";
import Userlist from "./Hesab/User/userlist";
import Users from "./Hesab/Users/users"
function App() {
  return (
    <div>
      <Routes>
      <Route path="/welcome/:name" element={<Welcome />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/succes" element={<Succes />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/users/:id" element={<Users/>}/>
      </Routes>
      
    </div>
  )
}

export default App
