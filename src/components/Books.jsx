/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useState, useEffect } from 'react'
import { getBooks } from '../apis/api'
import { Link } from 'react-router-dom'

export default function Books() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        getBooks()
        .then(books => setBooks(books))
    }, [])
    return (
        <div>
        <h1>Books</h1>
        <ul>
            {books.map(book => (
            <li key={book.id}>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
            ))}
        </ul>
        </div>
    )
}

