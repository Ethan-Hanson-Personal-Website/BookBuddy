/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { getSinglebook } from "../apis/api.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { patchBook } from "../apis/api.js";
import { getme } from "../apis/api.js";

export default function SingleBook() {
 const { id } = useParams();
    const [book, setBook] = useState([]);
    const [registered, setRegistered] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSinglebook(id);
                setBook(data.books);
            } catch (error) {
                console.error("Error fetching book:", error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div>
            <h2>{book.title}</h2>
            <p>By {book.author}</p>
            <p> description: {book.description}</p>
            <img src={book.coverimage} alt={book.title} />
            <p>Available: {book.available ? "Yes" : "No"}</p>
            <Link to={`/books/${id}/checkout`}>Checkout</Link>
        </div>
    );
}