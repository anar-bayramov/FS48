import { useParams } from 'react-router-dom';

export default function Welcome() {
  const { name } = useParams()
  
  return (
    <h1>Xos Geldiniz : {name}</h1>
  )
}