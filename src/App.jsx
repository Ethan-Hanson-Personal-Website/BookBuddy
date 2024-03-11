//TODO This is the main app function

import Navigations from './components/Navigations'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Books from './components/Books';
import Singlebook from './components/Singlebook';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import './App.css'

function App() {
  return (
    <Router>
      <Navigations />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<Singlebook />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  )
}

export default App