//TODO: this is the single book component that is linked to from the books component. It should display the details of the book that was clicked on. and allow the user to check out the book if it is available and they are logged in.
import React, { useState, useEffect } from 'react';
import { getSinglebook, patchBook } from '../apis/api';
import { useParams, useNavigate, Link } from "react-router-dom";

export default function Singlebook() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState(null);
    const [checkout, setCheckout] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSinglebook() {
            const dataResponse = await getSinglebook(id);
            if(dataResponse.success) {
                setBook(dataResponse.data.book);
            } else{
                setError(dataResponse.error);
            }
        }
        fetchSinglebook();
    }, []);      


    const handleCheckout = async () => {
        const checkO = await patchBook(bookId, false);
        if (checkO.error) {
            setError(checkO.error);
        } else {
            setCheckout(true);
            navigate('/books');
        }
    }

return (
    <>
      {error && <p>{error}</p>}
      {book && (
        <div>
          <figure>
            <img
              src={book.coverimage}
              alt="A pic of a book"
            />
            <figcaption>
              <h3>Book Details</h3>
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Description: {book.description}</p>
              <p>Status: {book.available ? 'Available' : 'Checked Out'}</p>
            </figcaption>
          </figure>
          <button onClick={handleCheckout}>Checkout Book</button>
        </div>
      )}
    </>
  );

}