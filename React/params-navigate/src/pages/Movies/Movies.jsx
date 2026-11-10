import { useNavigate } from "react-router-dom";

export default function Movies() {
    const navigate = useNavigate()
    const film = [
      { id: 1, title: "Inception", genre: "Sci-Fi" },
      { id: 2, title: "Interstellar", genre: "Sci-Fi" },
      { id: 3, title: "The Dark Knight", genre: "Action" },
      { id: 4, title: "Avatar", genre: "Fantasy" },
    ];
  return (
    <div>
          <h2>Film Siyahisi</h2>
          <ul>
              {film.map((movie) => (
                  <li style={{marginBottom:"10px"}} key={movie.id}>{movie.title}
                      <button style={{marginLeft:"10px"}} onClick={()=>navigate(`/movies/${movie.id}`)}>Detallara bax</button>
                  </li>
                  
              ))}
          </ul>
    </div>
  )
}
