import { useState } from 'react'
import bookLogo from './assets/books.png'
import './App.css'
import Navigations from './components/Navigations'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <Navigations token={token} />
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
      <h2>Welcome to the Library App!</h2>
    </>
  )
}

export default App