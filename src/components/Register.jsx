/* TODO - add your code to create a functional React component that renders a registration form */
import React, { useState } from 'react';
import { registerUser } from '../apis/api.js';
import { Link } from 'react-router-dom';

export default function Register() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await registerUser(firstname, lastname, email, password);
        if (data.error) {
            setError(data.error);
        } else {
            setSuccess('Registration successful! Please log in.');
        }
    }

    return (
        <div>
            {success ? (
                <p>{success} <Link to='/login'>Login</Link></p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input type='text' value={firstname} onChange={e => setFirstname(e.target.value)} placeholder='First Name' />
                    <input type='text' value={lastname} onChange={e => setLastname(e.target.value)} placeholder='Last Name' />
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
                    <input type='submit' value='Register' />
                </form>
            )}
            {error && <p>{error}</p>}
        </div>
    )
}
