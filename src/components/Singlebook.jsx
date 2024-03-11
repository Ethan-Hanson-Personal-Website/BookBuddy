//TODO: this is the single book component that is linked to from the books component. It should display the details of the book that was clicked on. and allow the user to check out the book if it is available and they are logged in.
import React, { useState, useEffect } from 'react';
import { getSinglebook, patchBook } from '../apis/api';
import { Link } from 'react-router-dom';

export default function Singlebook({ bookId }) {
    const [book, setBook] = useState({});
    const [error, setError] = useState('');
    const [checkout, setCheckout] = useState(false);

    useEffect(() => {
        async function fetchSinglebook() {
            const data = await getSinglebook(bookId);
            setBook(data);
        }
        fetchSinglebook();
    }, [bookId]);

    const handleCheckout = async () => {
        const data = await patchBook(bookId, false);
        if (data.error) {
            setError(data.error);
        } else {
            setCheckout(true);
        }
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.available ? 'Available' : 'Checked Out'}</p>
            <p>{book.description}</p>
            <img src={book.coverimage} alt={book.title} />
            {checkout ? (
                <p>Book checked out! <Link to='/books'>Return to Books</Link></p>
            ) : (
                <button onClick={handleCheckout}>Check Out</button>
            )}
            {error && <p>{error}</p>}
        </div>
    );
}