/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import React, { useState, useEffect } from 'react';
import { getme, getReservations, deleteReservation } from '../apis/api';
import { Link } from 'react-router-dom';

export default function Account() {
    const [user, setUser] = useState({});
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchUser() {
            const data = await getme(localStorage.getItem('token'));
            setUser(data);
        }
        fetchUser();
    }, []);

    useEffect(() => {
        async function fetchReservations() {
            const data = await getReservations(localStorage.getItem('token'));
            setReservations(data);
        }
        fetchReservations();
    }, []);

    const handleReturn = async (reservationId) => {
        const data = await deleteReservation(reservationId);
        if (data.error) {
            setError(data.error);
        } else {
            const updatedReservations = reservations.filter(reservation => reservation.id !== reservationId);
            setReservations(updatedReservations);
        }
    }

    return (
        <div>
            <h2>{user.firstname}'s Account</h2>
            <p>Email: {user.email}</p>
            <h3>Checked Out Books</h3>
            {reservations.map(reservation => (
                <div key={reservation.id}>
                    <p>{reservation.book.title}</p>
                    <button onClick={() => handleReturn(reservation.id)}>Return</button>
                </div>
            ))}
            {error && <p>{error}</p>}
        </div>
    );
}
