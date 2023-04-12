import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
export default function Profile(props) {


    const defaultImg = 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2776e79e778be9646d471a21c7fa4c8e~c5_720x720.jpeg?x-expires=1681380000&x-signature=11zSLchWFjRwMBYD75nvykoX7Dk%3D'
    const [selectedImage, setSelectedImage] = useState(defaultImg);
    const [newUser, setNewUser] = useState({})

    const navigate = useNavigate()

    


    const changeHandler = (e) => {
        const user = { ...newUser }
        user[e.target.name] = e.target.value
        setNewUser(user)
        console.log(user);
    }

    const editProfileHandler = () => {
        {
            toast.success('Details have been updated successfully!', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    const gotoChangePassword = () => {
        navigate('/changepassword')
    }

    const gotoDeleteAccount = () => {
        navigate('/deleteaccount')
    }

    console.log('print this now', props.user);
    return (
        <div>
            <h2 className='heading'>{props.user.firstName} {props.user.lastName}</h2>
            <div className='profile'>
                <div className='pfp'>
                    {selectedImage && (
                        <div >
                            <img alt="not found" src={selectedImage === defaultImg ? (selectedImage) : URL.createObjectURL(selectedImage)} />
                            <br />
                            <button className='button' onClick={() => setSelectedImage(defaultImg)}>Remove Photo</button>
                        </div>
                    )}
                    <input className='custom-file-input' type="file" name="pfp" onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }}
                    />
                </div>


                <div className='form-profile' >
                    <div>
                        <h3 className='subheading'>Personal Details</h3>
                    </div>
                    <form className='form-items' autoComplete='off'>

                        <div className='form-item'>
                            <input placeholder={props.user.firstName} type='text' className='auth-form-profile' name='firstName' onChange={changeHandler}></input>
                        </div>
                        <div className='form-item'>
                            <input placeholder={props.user.lastName} className='auth-form-profile' name='lastName' onChange={changeHandler}></input>
                        </div>
                        <div className='form-item'>
                            <input placeholder={props.user.email} className='auth-form-profile' name='emailAddress' onChange={changeHandler}></input>
                        </div>
                        <div className='form-item'>
                            <input placeholder={ props.user.phoneNum ? props.user.phoneNum : 'Phone Number' } className='auth-form-profile' name='phoneNum' onChange={changeHandler}></input>
                        </div>
                    </form>
                    <div className='buton-div'>
                        <Button className='button-edit' variant='priamry' onClick={editProfileHandler}>Update Details</Button>
                    </div>
                </div>

            </div>
            <ToastContainer />
            <div className='profile-text'>
            <h4><a onClick={gotoChangePassword}>Change Password</a></h4>
            <h4><a onClick={gotoDeleteAccount}>Delete Account</a></h4>
            </div>
        </div>
    )
}
