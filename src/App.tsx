import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import firebaseGetApp from './shared/firebaseGetApp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>{JSON.stringify(firebaseGetApp())}</div>
  },
])

const App = () => <RouterProvider router={router} />

export default App
