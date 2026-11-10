import { useNavigate, useParams } from "react-router-dom";
import { globalUser } from "../db";

export default function Users() {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedUser = globalUser.find((user)=> user.id === Number(id))
  return (
    <div>
      <h1>User page</h1>
      <h3>Istifadeci ID : {selectedUser.id} </h3>
      <h3>Istifadeci Adi : {selectedUser.name}</h3>
      <h3>Istidaci Rolu : {selectedUser.role} </h3>
      <button onClick={()=> navigate(-1)}>Geri</button>
      <button onClick={() => navigate("/userlist")}>Ana sehife</button>
    </div>
  );
}
