import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [appls, setAppls] = useState([])
  const [students, setStudents] = useState([])
  const [schools, setSchools] = useState([])

  useEffect(() => {
    fetch("http://localhost:4242/api/applications")
    .then(r = r.json())
    .then(applData => setAppls(applData))
  })

  useEffect(() => {
    fetch("http://localhost:4242/api/students")
    .then(r = r.json())
    .then(studData => setStudents(studData))
  })

  useEffect(() => {
    fetch("http://localhost:4242/api/schools")
    .then(r = r.json())
    .then(schoolData => setSchools(schoolData))
  })

  return (
    <>
      <div className="appContainer">
        <Header />
        <NavBar />
        <Outlet />
        

      </div>
    </>
  )
}

export default App
