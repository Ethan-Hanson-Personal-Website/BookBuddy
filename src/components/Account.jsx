/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useState, useEffect } from 'react'
import { getme } from '../apis/api.js'
import { Link } from 'react-router-dom'
import { getReservations } from '../apis/api.js'
import { deleteReservation } from '../apis/api.js'

export default function Account() {
    const [user, setUser] = useState({})
    const [token, setToken] = useState('')
    const [error, setError] = useState('')
    const [reservations, setReservations] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getme(token)
            setUser(data)
        }
        fetchData()
    }, [token])

    useEffect(() => {
        const fetchReservations = async () => {
            const data = await getReservations(token)
            setReservations(data)
        }
        fetchReservations()
    }, [token])

    const handleDeleteReservation = async (id) => {
        const data = await deleteReservation(id, token)
        if (data.success) {
            setError('')
            const newReservations = reservations.filter(reservation => reservation.id !== id)
            setReservations(newReservations)
        } else {
            setError('Delete failed. Please try again.')
        }
    }

    return (
        <div>
            {user.id ? (
                <div>
                    <h2>{user.firstName} {user.lastName}</h2>
                    <p>Email: {user.email}</p>
                    <h3>Your Reservations</h3>
                    {reservations.length > 0 ? (
                        <ul>
                            {reservations.map(reservation => (
                                <li key={reservation.id}>
                                    <p>{reservation.book.title} by {reservation.book.author}</p>
                                    <button onClick={() => handleDeleteReservation(reservation.id)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>You have no reservations.</p>
                    )}
                </div>
            ) : (
                <p>Please <Link to='/login'>login</Link> or <Link to='/register'>register</Link> to view your account.</p>
            )}
            {error && <p>{error}</p>}
        </div>
    )
}