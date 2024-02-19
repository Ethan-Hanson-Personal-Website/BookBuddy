/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { getSinglebook } from "../apis/api.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { patchBook } from "../apis/api.js";
import { getme } from "../apis/api.js";

export default function SingleBook() {
  const [book, setBook] = useState({});
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSinglebook(id);
      setBook(data);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getme(token);
      setUser(data);
    };
    fetchData();
  }, [token]);

  const handleCheckout = async () => {
    const data = await patchBook(id, token);
    if (data.success) {
      setError("");
      setBook(data.book);
    } else {
      setError("Checkout failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>By {book.author}</p>
      <p>Description: {book.description}</p>
      <img src={book.coverimage} alt={book.title} />
      {book.available ? (
        <button onClick={handleCheckout}>Checkout</button>
      ) : (
        <p>Not available</p>
      )}
      {error && <p>{error}</p>}
      <Link to="/books">Back to all books</Link>
    </div>
  );
}