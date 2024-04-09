import { Navigate, useOutletContext } from 'react-router-dom'

export const Component = () => {
  const user = useOutletContext()

  if (user !== null) {
    return <Navigate to="/" replace />
  }

  throw new Error('Not implemented')
}
