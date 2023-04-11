import React from 'react'
import { useState } from 'react';

export default function Profile(props) {

    const [selectedImage, setSelectedImage] = useState(null);

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
            <h2 className='heading'>{props.user.name} Nabeel</h2>


            {selectedImage && (
        <div>
          <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br/>
        <button className='button' onClick={() => setSelectedImage(null)}>Remove Photo</button>
        </div>
        )}
        <input  type="file" name="pfp" onChange={(event) => {
        console.log(event.target.files[0]);
        setSelectedImage(event.target.files[0]);
        }}
      />
            
            
            <h4 className='profile-text'>Edit Profile Photo</h4>
            <h4 className='profile-text'>Change Password</h4>
            <h4 className='profile-text'>Delete Account</h4>
        </div>
    )
}
