//TODO make a navbar that has links to the following pages: Home, Books, Login, Register, Account, with books as the home page
import { Link } from 'react-router-dom';

export default function Navigations() {
    const isLoggedIn = !!localStorage.getItem('token');

    return (
        <nav>
            <Link className="nav-link" to='/books'>Books</Link>
            {isLoggedIn ? (
                <Link className="nav-link" to='/account'>Account</Link>
            ) : (
                <>
                    <Link className="nav-link" to='/login'>Login</Link>
                    <Link className="nav-link" to='/register'>Register</Link>
                </>
            )}
        </nav>
    );
}