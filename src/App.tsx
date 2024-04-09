import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('./views/ViewRoot'),
    children: [
      {
        path: '',
        lazy: () => import('./views/ViewHome'),
      },
      {
        path: 'nouser',
        lazy: () => import('./views/ViewNoUser'),
      },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
