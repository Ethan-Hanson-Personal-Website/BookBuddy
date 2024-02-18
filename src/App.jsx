import { useState } from 'react'
import bookLogo from './assets/books.png'
import './App.css'

/*
<p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>
      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>
      <p>Don't forget to set up React Router to navigate between the different views of your single page application!</p>
*/

/*
todo:
- need to set up a navbar
- need to have links to books, login, account
- need to have a token to check if user is logged in
- need to have a way to log in and log out
- need homepage to look nice
- what do i want homepage to display?

*/

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
      <h2>Welcome to the Library App!</h2>
    </>
  )
}

export default App
