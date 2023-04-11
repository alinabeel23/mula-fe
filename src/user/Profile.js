import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function Profile() {
    // const [authenticated, setauthenticated] = useState(null);

    // const { user } = props
    
    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("token");
    //     console.log(localStorage.getItem("token"));
    //     if (loggedInUser) {
    //         setauthenticated(loggedInUser);
    //         console.log('user is', lp);
    //     }
    // }, [])

    

    // if (!authenticated) {
    //     return <Navigate replace to="/signup" />;
    // } else {
        return (
            <div>
                <h2 className='heading'>User Name</h2>
                {/* {user.user.name} */}

            </div>
        )
}
