const BOOKAPI = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`;
const USERAPI = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users`;
const RESERVATIONSAPI = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations`;


//need to make a function to get all books from bookapi
export async function getBooks() {
    const response = await fetch(BOOKAPI);
    const data = await response.json();
    return data;

}

//need to make a function to fetch a single book from bookapi
export async function getBook(bookId) {
    const response = await fetch(`${BOOKAPI}/${bookId}`);
    const data = await response.json();
    return data;
}


//need to make a function to patch a book on bookapi/:id so Any registered user can update (checkout or return) a book. You must pass a valid token with this request, or it will be rejected.
export async function patchBook(bookId, available) {
    const response = await fetch(`${BOOKAPI}/${bookId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ available })
    });
    const data = await response.json();
    return data;
}


//need to make a function to post on userapi/register
export async function registerUser(firstname, lastname, email, password) {
    const response = await fetch(`${USERAPI}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstname, lastname, email, password })
    });
    const data = await response.json();
    return data;

}


//need to make a function to post on userapi/login
export async function loginUser(email, password) {
    const response = await fetch(`${USERAPI}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    return data;

}


//need to make a function to get me on userapi/me
export async function getMe() {
    const response = await fetch(`${USERAPI}/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    const data = await response.json();
    return data;
}


//need to make a function to GET a list of books the current user has checked out. You must pass a valid token with this request, or it will be rejected
export async function getReservations() {
    const response = await fetch(`${RESERVATIONSAPI}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
}
    });
    const data = await response.json();
    return data;
}


//need to make a function to delete a reservation on reservationsapi/:id
export async function deleteReservation(reservationId) {
    const response = await fetch(`${RESERVATIONSAPI}/${reservationId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    const data = await response.json();
    return data;
}