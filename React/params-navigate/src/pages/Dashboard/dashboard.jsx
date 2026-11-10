import { useNavigate } from "react-router-dom"

export default function Dashboard() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Dashboard pages</h1>
      <button onClick={()=> navigate(-1)}>Geri</button>
    </div>
  )
}
