import { useGetUsers } from '../../api'

export const Home = () => {
  const users = useGetUsers()
  console.log(users)
  return <>Home</>
}
