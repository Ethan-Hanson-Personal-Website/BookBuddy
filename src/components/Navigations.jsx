//TODO make a navbar that has links to the following pages: Home, Books, Login, Register, Account, with books as the home page
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