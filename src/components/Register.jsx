/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from 'react'
import { registerUser } from '../apis/api'
import { useHistory } from 'react-router-dom'


export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()
        registerUser(username, password, email)
        .then(() => history.push('/login'))
        .catch(err => setError(err.message))
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Register</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}