import { UserResponse } from '../../api'
import { useNavigate } from 'react-router-dom'

type Props = {
  users: UserResponse[]
}

export const UsersTable = ({ users }: Props) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Avatar
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Name
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map(({ avatar, first_name, last_name, email, id }) => (
                  <tr
                    onClick={() => navigate('/users/' + id)}
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer"
                    key={id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                      <img
                        className="inline-block h-12 w-12  rounded-full ring-2 ring-white"
                        src={avatar}
                        alt=""
                      />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {first_name} {last_name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                      {email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
