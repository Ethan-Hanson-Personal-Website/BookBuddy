/* TODO - add your code to create a functional React component that renders a login form */
import React, { useState } from 'react';
import { loginUser } from '../apis/api.js';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await loginUser(email, password);
            if (data.error) {
                setError(data.error);
            } else {
                localStorage.setItem('token', data.token);
                navigate('/');
            }
        } catch (error) {
            setError('Invalid email or password');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
                <input type='submit' value='Login' />
            </form>
            {error && <p>{error}</p>}
            <p>No account? <Link to='/register'>Register</Link></p>
        </div>
    )
}