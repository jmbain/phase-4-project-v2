import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './components/ErrorPage.jsx'
import App from './App.jsx'
import './index.css'

import ApplicationList from './components/ApplicationList.jsx'
import StudentList from './components/StudentList.jsx'
import NavBar from './components/NavBar.jsx'


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
      },
      {
        path: '/students',
        element: <StudentList />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
