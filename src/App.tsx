import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hi there</div>
  },
])

const App = () => <RouterProvider router={router} />

export default App
