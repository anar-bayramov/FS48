import { useNavigate } from "react-router-dom"

export default function Products() {
    const navigate = useNavigate()
    const handleClick = () => {
        setTimeout(() => {
            navigate("/Succes")
        }, 1500);
    }

  return (
    <div>
          <h1>Sifaris tesdiq formu</h1>
          <h3>Adiniz : Anar</h3>
          <h3>Sebet (3)</h3>
          <button onClick={handleClick}>Sifarisi tesdiq et</button>
    </div>
  )
}
