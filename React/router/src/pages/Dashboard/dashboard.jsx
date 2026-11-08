import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1)
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handlePrev}>Geri</button>
    </div>
  )
}

export default Dashboard
