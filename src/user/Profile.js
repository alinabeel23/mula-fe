import React from 'react'

export default function Profile(props) {
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
            <img className='pfp' src='https://www.citypng.com/public/uploads/small/116652258274f0mjs6lep10dohsdnx1xdagzvggylnqvoytp1ewb6apvcykaw8vgteolcubrjcbbfnphltelb6evjlowiaieg6a08klytx1uuos.png'/>
            <h4 className='profile-text'>Edit Profile Photo</h4>
            <h4 className='profile-text'>Change Password</h4>
            <h4 className='profile-text'>Delete Account</h4>
        </div>
    )
}
