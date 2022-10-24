import { useEffect, useState } from 'react'

export const useGetUsers = () => {
  const [users, setUsers] = useState()
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch('https://reqres.in/api/users?page=1')
        const userResponse = await res.json()
        setUsers(userResponse.data)
      } catch (e) {
        console.log(e)
      }
    }
    getUsers()
  }, [])

  return users
}
