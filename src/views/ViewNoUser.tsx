import { Navigate, useOutletContext } from 'react-router-dom'
import ScreenCardWithTitle from '../components/ScreenCardWithTitle'
import { GoogleAuthProvider, getAuth, signInWithRedirect } from 'firebase/auth'
import firebaseGetApp from '../shared/firebaseGetApp'

export const Component = () => {
  const user = useOutletContext()

  if (user !== null) {
    return <Navigate to="/" replace />
  }

  return (
    <ScreenCardWithTitle title="Welcome!" color="primary">
      <button
        className="bg-primary-700 active:bg-primary-800 text-white p-3 rounded-lg transition-colors"
        type="button"
        onClick={() => {
          const firebaseApp = firebaseGetApp()
          const auth = getAuth(firebaseApp)
          const provider = new GoogleAuthProvider()
          signInWithRedirect(auth, provider)
        }}
      >
        Login with Google
      </button>
    </ScreenCardWithTitle>
  )
}
