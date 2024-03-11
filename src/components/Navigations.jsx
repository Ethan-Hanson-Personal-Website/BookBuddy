//TODO make a navbar that has links to the following pages: Home, Books, Login, Register, Account, with books as the home page
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Navigations() {
//     return (
//         <nav>
//             <Link to='/'>Home</Link>
//             <Link to='/books'>Books</Link>
//             <Link to='/login'>Login</Link>
//             <Link to='/register'>Register</Link>
//             <Link to='/account'>Account</Link>
//         </nav>
//     );
// }

//need the code above to look  more like the code below(just a reference), basically need it so that account can only be accessed if logged in
// import { Link } from "react-router-dom";

// const Navbar = ({ user }) => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         {!user && 
//           <>
//             <li>
//               <Link to="login">Login</Link>
//             </li>
//             <li>
//               <Link to="registration">Registration</Link>
//             </li>
//           </>
//         }
//         {user && 
//           <>
//             <li>
//               <Link to="profile">Profile</Link>
//             </li>
//             <li>
//               <Link to="dashboard">Dashboard</Link>
//             </li>
//           </>
//         }
//       </ul>
//     </nav>
//   )
// }

// export default Navbar;
/////////////////////
//api.js 
//const BOOKAPI = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`;
// const USERAPI = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users`;
// const RESERVATIONSAPI = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations`;


// //need to make a function to get all books from bookapi it should return an array of books
// export async function getBooks() {
//     try {
//         const response = await fetch(`${BOOKAPI}`);
//         const data = await response.json();
//         return data.books;
//     } catch (error) {
//         console.error("Error fetching books:", error);
//     }
// }

// //need to make a function to fetch a single book from bookapi
// export async function getSinglebook(bookId) {
//     try {
//         const response = await fetch(`${BOOKAPI}/${bookId}`);
//         const data = await response.json();
//         return data.books;
//     } catch (error) {
//         console.error("Error fetching books:", error);
//     }
// }

// //need to make a function to patch a book on bookapi/:id so Any registered user can update (checkout or return) a book. You must pass a valid token with this request, or it will be rejected.
// export async function patchBook(bookId, available) {
//     const response = await fetch(`${BOOKAPI}/${bookId}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${localStorage.getItem('token')}`
//         },
//         body: JSON.stringify({ available })
//     });
//     const data = await response.json();
//     return data;
// }


// //need to make a function to post on userapi/register
// export async function registerUser(firstname, lastname, email, password) {
//     try {
//         const response = await fetch(`${USERAPI}/register`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ firstname, lastname, email, password })
//         });
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error registering user:", error);
//     }
// }

// //pull token from api and use it to verify registration
// export async function getme(token) {
//     const response = await fetch(`${USERAPI}/me`, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     });
//     const data = await response.json();
//     return data;
// }
    
// //need to make a function to post on userapi/login
// export async function loginUser(email, password) {
//     try {
//         const response = await fetch(`${USERAPI}/login`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email, password })
//         });
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error logging in user:", error);
//         throw error;
//     }
// }




// //need to make a function to GET a list of books the current user has checked out. You must pass a valid token with this request, or it will be rejected
// export async function getReservations(token) {
//     try {
//         const response = await fetch(`${USERAPI}/reservations`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             },
//         });
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error getting reservations:", error);
//         throw error;
//     }
// }


// //need to make a function to delete a reservation on reservationsapi/:id
// export async function deleteReservation(reservationId) {
//     const response = await fetch(`${RESERVATIONSAPI}/${reservationId}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//     });
//     const data = await response.json();
//     return data;
// }
//
//login.jsx
/* TODO - add your code to create a functional React component that renders a login form */
// import React, { useState } from 'react';
// import { loginUser } from '../apis/api.js';
// import { Link } from 'react-router-dom';

// export default function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const data = await loginUser(email, password);
//             if (data.error) {
//                 setError(data.error);
//             } else {
//                 localStorage.setItem('token', data.token);
//                 window.location = '/';
//             }
//         } catch (error) {
//             setError('Invalid email or password');
//         }
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
//                 <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
//                 <input type='submit' value='Login' />
//             </form>
//             {error && <p>{error}</p>}
//             <p>No account? <Link to='/register'>Register</Link></p>
//         </div>
//     )
// }
////////////////////
//NOW TODO make a navbar that has links to the following pages: Home, Books, Login, Register, Account, with books as the home page and account only accessible if logged in
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigations({user}) {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/books'>Books</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            {user && <Link to='/account'>Account</Link>}
        </nav>
    );
}