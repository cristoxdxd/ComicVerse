import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './Pages/404/NotFound.tsx'
import { About } from './Pages/About/About.tsx'
import { Home } from './Pages/Home/Home.tsx'
import { Dashboard } from './Pages/Dashboard/Dashboard.tsx'
import { ComicDetail } from './Pages/ComicDetail/ComicDetail.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <NotFound />,
  },
  {
    path: '/comic/:title',
    element: <ComicDetail />,
    errorElement: <NotFound />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={ router }></RouterProvider>
  </React.StrictMode>,
)
