//TODO: this is the single book component that is linked to from the books component. It should display the details of the book that was clicked on. and allow the user to check out the book if it is available and they are logged in.
import { useState, useEffect } from 'react';
import { getSinglebook, patchBook } from '../apis/api';
import { useParams, useNavigate } from "react-router-dom";

export default function Singlebook() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      async function fetchBook() {
          try {
              const data = await getSinglebook(id);
              setBook(data);
          } catch (error) {
              console.error('Failed to fetch book:', error);
          }
      }
      fetchBook();
  }, [id]);

    const handleCheckout = async () => {
        const data = await patchBook(id);
        if (data.error) {
            alert(data.error);
        } else {
            navigate('/');
        }
    }


    return (
        <div>
            {book && (
                <div>
                <img
                    src={book.coverimage}
                    alt="A pic of a book"
                />
                <h3>Book Details</h3>
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
                <p>Description: {book.description}</p>
                <p>Status: {book.available ? 'Available' : 'Checked Out'}</p>
                <button onClick={handleCheckout}>Checkout Book</button>
            </div>
            )}
        </div>
    );
}