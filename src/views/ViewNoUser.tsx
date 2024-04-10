import { Navigate, useOutletContext } from 'react-router-dom'
import ScreenCardWithTitle from '../components/ScreenCardWithTitle'

export const Component = () => {
  const user = useOutletContext()

  if (user !== null) {
    return <Navigate to="/" replace />
  }

  return (
    <ScreenCardWithTitle title="Welcome!" color="primary">
      <button
        className="bg-primary-700 text-white p-3 rounded-lg transition-colors"
      >
        Login with Google
      </button>
    </ScreenCardWithTitle>
  )
}
