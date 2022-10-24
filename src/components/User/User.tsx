import { useParams } from 'react-router-dom'

export const User = () => {
  const { id } = useParams()
  return <img src={'https://random.imagecdn.app/500/150?image=' + id} alt="anything" />
}
