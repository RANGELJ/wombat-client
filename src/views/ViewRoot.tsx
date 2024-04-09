import { Outlet } from 'react-router-dom'
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
