/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { getBooks } from "../apis/api.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);

  const renderBooks = async () => {
    try {
      const books = await getBooks();
      setBooks(books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    renderBooks();
  }, []);

  return (
    <div className="all-books">
      {books.map(({ id, title, author, description, coverimage, available }) => (
        <div key={id} className="book-card">
          <h4>{title}</h4>
          <p>By {author}</p>
          <p> description: {description}</p>
          <Link to={`/books/${id}`}>See Details</Link>
        </div>
      ))}
    </div>
  );
}
    