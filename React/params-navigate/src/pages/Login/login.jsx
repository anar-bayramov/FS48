import { useNavigate } from "react-router-dom"
function Login() {
    const navigate = useNavigate();
   
    return (
    <div>
          <h1>Login</h1>
          <input type="text" />
          <button onClick={()=>navigate("../Dashboard")}>Daxil ol</button>
    </div>
  )
}

export default Login
