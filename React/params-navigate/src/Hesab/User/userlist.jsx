import { useNavigate } from "react-router-dom";
import { globalUser } from "../db";

export default function Userlist() {
  const navigate = useNavigate()

  
  return (
    <div>
      <h3>Istifadeci Siyahisi</h3>
      <ul>
        {globalUser.map((user) => (
          <li style={{marginBottom:"10px"}} key={user.id}>{user.name}
            <button style={{marginLeft:"10px"}} onClick={()=>navigate(`/users/${user.id}`)}>Profile kec</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

