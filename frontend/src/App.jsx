import { useState } from 'react'
import Login from './pages/Login.jsx'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import PrivateRoute from './pages/PrivateRoute.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
