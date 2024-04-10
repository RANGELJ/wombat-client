import { Outlet, useRouteError } from 'react-router-dom'
import firebaseGetApp from '../shared/firebaseGetApp'
import { type User, getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

export const Component = () => {
  const [user, setUser] = useState<false | null | User>(false)

  useEffect(() => {
    const firebaseApp = firebaseGetApp()
    const auth = getAuth(firebaseApp)
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
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="bg-white w-3/4 md:w-1/3 h-3/4 md:h-1/3 shadow-md border-t-2 border-red-400 flex flex-col p-2">
        <h1 className="text-2xl text-center">Error</h1>
        <div className="grow flex justify-center items-center">
          <p className="text-sm">{error.message}</p>
        </div>
      </div>
    </div>
  )
}
