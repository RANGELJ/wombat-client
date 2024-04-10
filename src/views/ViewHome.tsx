import { Navigate, useOutletContext } from 'react-router-dom'

export const Component = () => {
  const user = useOutletContext()

  if (user === null) {
    return <Navigate to="/nouser" replace />
  }

  throw new Error('Home view not implemented yet!')
}
