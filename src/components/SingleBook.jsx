/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from 'react'
import { getSinglebook } from '../apis/api.js'
import { patchBook } from '../apis/api.js'


export default function SingleBook() {
    const [book, setBook] = useState({})
    const [token, setToken] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getSinglebook()
            setBook(data)
        }
        fetchData()
    }, [])

    const handleCheckout = async (event) => {
        event.preventDefault()
        const data = await patchBook(book.id, token)
        if (data.success) {
            setError('')
        } else {
            setError('Checkout failed. Please try again.')
        }
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>By {book.author}</p>
            <p>{book.pages} pages</p>
            {token && <button onClick={handleCheckout}>Checkout</button>}
            {error && <p>{error}</p>}
        </div>
    )

}