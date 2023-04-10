import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function Profile(props) {
    const [authenticated, setauthenticated] = useState(null);

    const { user } = props
    
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        console.log(localStorage.getItem("authenticated"));
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, [])

    

    // if (!authenticated) {
    //     return <Navigate replace to="/login" />;
    // } else {
        return (
            <div>
                <h2 className='heading'>User Name</h2>
                {/* {user.user.name} */}

            </div>
        )
    }
// }
