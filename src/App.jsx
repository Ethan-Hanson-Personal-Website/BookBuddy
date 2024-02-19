
import Navigations from './components/Navigations'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Books from './components/Books'
import Account from './components/Account'
import SingleBook from './components/SingleBook'
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
        <Route path="/account" element={<Account />} />
        <Route path="/books/:id" element={<SingleBook />} />
      </Routes>
    </Router>
  )
}

export default App