/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React, { useState, useEffect } from 'react';
import { getBooks } from '../apis/api';
import { Link } from 'react-router-dom';

export default function Books() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchBooks() {
            const data = await getBooks();
            setBooks(data);
        }
        fetchBooks();
    }, []);

    const filteredBooks = books.filter(book => {
        return book.title.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div>
            <input
                type='text'
                placeholder='Search Books'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            {filteredBooks.map(book => (
                <div key={book.id} className='book-card'>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <p>{book.available ? 'Available' : 'Checked Out'}</p>
                    <Link to={`/books/${book.id}`}>Show Details</Link>
                </div>
            ))}
        </div>
    );
}