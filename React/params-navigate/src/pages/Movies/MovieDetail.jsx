import { useParams } from "react-router-dom"
export default function MovieDetail() {
    const { id } = useParams();

  return (
    <div>
      <h1>
        Siz ID-si {id}olan film izleyirsiniz.
      </h1>
    </div>
  );
}
