import { Outlet, useRouteError } from 'react-router-dom'
import firebaseGetApp from '../shared/firebaseGetApp'
import { type User, getAuth, onAuthStateChanged, useDeviceLanguage } from 'firebase/auth'
import { useEffect, useState } from 'react'
import ScreenCardWithTitle from '../components/ScreenCardWithTitle'

export const Component = () => {
  const [user, setUser] = useState<false | null | User>(false)

  useEffect(() => {
    const firebaseApp = firebaseGetApp()
    const auth = getAuth(firebaseApp)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDeviceLanguage(auth)
    return onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [])

  if (user === false) {
    return null
  }

  return <Outlet context={user} />
}

export const ErrorBoundary = () => {
  const routeError = useRouteError()
  const error = routeError instanceof Error ? routeError : new Error('Unknown error')

  return (
    <ScreenCardWithTitle title="Error" color="error">
      <p className="text-sm">{error.message}</p>
    </ScreenCardWithTitle>
  )
}
