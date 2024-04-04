import React, { useState } from 'react';
import axios from 'axios';
import image1 from '../shared/louis-hansel-phEaeqe555M-unsplash.jpg';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import "./login.managers.css";
import LoginNavBar from "../../components/user/navBar/loginNavBar.component.jsx";


const LoginManagers = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            console.log("email:",email);
            console.log("password:",password);

            const response = await
                axios.post('http://localhost:8000/managers/login', {
                email: email,
                password: password
            });
            console.log("response:",response);

            if (response.data.success) {
                navigate('/manager');
            } else {
                alert('Incorrect email or password.');
            }
        } catch (error) {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                alert('Error: ' + error.message);
            }
    };
    return (
        <div>
            <LoginNavBar />

            <MDBContainer className='my-5'>
                <h2 className="text-center mb-4">Manager Log in</h2>

                <MDBCard>

                    <MDBRow className='g-0 d-flex align-items-center'>

                        <MDBCol md='4'>
                            <MDBCardImage src={image1} alt='mink' className='rounded-t-5 rounded-tr-lg-0' fluid/>
                        </MDBCol>

                        <MDBCol md='8'>

                            <MDBCardBody>

                                <MDBInput wrapperClass='mb-4'
                                          label='Email address'
                                          id='form1'
                                          type='email'
                                          onChange={(e) => setEmail(e.target.value)}
                                />
                                <MDBInput wrapperClass='mb-4'
                                          label='Password'
                                          id='form2'
                                          type='password'
                                          onChange={(e) => setPassword(e.target.value)}
                                />

                                <div className="d-flex justify-content-between mx-4 mb-4">
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
                                    <a href="!#">Forgot password?</a>
                                </div>

                                <MDBBtn className="mb-4 w-100" onClick={handleSignIn}>
                                    <b>Sign in</b>
                                </MDBBtn>

                            </MDBCardBody>

                        </MDBCol>

                    </MDBRow>

                </MDBCard>
            </MDBContainer>
        </div>
    );
}

export default LoginManagers
