//TODO make a navbar that has links to the following pages: Home, Books, Login, Register, Account, with books as the home page
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigations() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/books'>Books</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/account'>Account</Link>
        </nav>
    );
}