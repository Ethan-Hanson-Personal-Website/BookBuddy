/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from 'react';
import { loginUser } from '../apis/api.js';
import { Link } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await loginUser(email, password);
        if (data.token) {
            setToken(data.token);
            localStorage.setItem('token', data.token);
        } else {
            setError('Login failed. Please try again.');
        }
    }

    return (
        <div>
            {token ? (
                <p>Login successful! You can now <Link to='/account'>view your account</Link>.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
                    <input type='submit' value='Login' />
                </form>
            )}
            {error && <p>{error}</p>}
        </div>
    )
}