/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import React, { useState, useEffect } from 'react';
import { getme } from '../apis/api.js';
import { Link } from 'react-router-dom';

export default function Account() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const data = await getme(localStorage.getItem('token'));
            setUser(data);
        }
        fetchUser();
    }, []);

    return (
        <div>
            {user && (
                <div>
                    <h3>Account Details</h3>
                    <p>First Name: {user.firstname}</p>
                    <p>Last Name: {user.lastname}</p>
                    <p>Email: {user.email}</p>
                    <p>Books: {user.books.length}</p>
                </div>
            )}
        </div>
    );
}