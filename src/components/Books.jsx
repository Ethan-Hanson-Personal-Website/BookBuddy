/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { getBooks, getSinglebook } from "../apis/api.js";
import { useEffect, useState } from "react";
import { patchBook } from "../apis/api.js";

export default function Books() {
  const [books, setBooks] = useState([]);
const [selectedBook, setSelectedBook] = useState(null);

 
  const renderBooks = async () => {
    try {
      const books = await getBooks();
      setBooks(books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const fetchBook = async (bookId) => {
    try {
      const book = await getSinglebook(bookId);
      setSelectedBook(book);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };



  const handleCheckout = async (bookId, available) => {
    try {
      await patchBook(bookId, !available);
      renderBooks(bookId);
    } catch (error) {
      console.error("Error checking out book:", error);
    }
  }

  const searchBook = (search) => {
    const searchBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
    setBooks(searchBooks);
    if (search === "") {
      renderBooks();
    }
  };


  useEffect(() => {
    renderBooks();
  }, [])

  return (
    <div className="all-books">
      <h2>Books</h2>
      <input type="text" placeholder="Search books" onChange={(e) => searchBook(e.target.value)} />
      {books.map(({ id, title, author }) => (
        <div key={id} className="book-card">
          <h4>{title}</h4>
          <p>By {author}</p>
          <button onClick={() => fetchBook(id)}>See Details</button>
        </div>
      ))}

      {selectedBook && (
        <div>
          <h2>{selectedBook.title}</h2>
          <p>By {selectedBook.author}</p>
          <p> description: {selectedBook.description}</p>
          <img src={selectedBook.coverimage} alt={selectedBook.title} />
          {localStorage.getItem('token') && (
            <button onClick={() => handleCheckout(selectedBook.id, selectedBook.available)}>
              {selectedBook.available ? 'Check Out' : 'Return'}
            </button>
          )}
          <button onClick={() => setSelectedBook(null)}>Close</button>
        </div>
      )}
    </div>
  );
}
    