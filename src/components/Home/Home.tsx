import { useGetUsers } from '../../api'
import { UsersTable } from '../UserTable'

export const Home = () => {
  const users = useGetUsers()

  if (!users) {
    return <>Loading</>
  }

  return (
    <>
      <UsersTable users={users} />
    </>
  )
}
