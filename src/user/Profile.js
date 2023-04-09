import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function Profile() {
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, [])

    if (!authenticated) {
        return <Navigate replace to="/login" />;
    } else {
        return (
            <div>

            </div>
        )
    }
}
