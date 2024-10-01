import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, ReactDOM } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage />,
    // loader: userLoader,
    children: [
      {
        path: '/applications',
        element: <ApplicationList />,
        loader: applicationListLoader
      },
      {
        path: '/students',
        element: <StudentList />,
        loader: studentListLoader
      },
      {
        path: '/schools',
        element: <SchoolList />,
        loader: schoolListLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
