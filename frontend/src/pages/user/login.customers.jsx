import React, {useState, useContext} from 'react';
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
import "./login.customers.css";
import LoginNavBar from "../../components/user/navBar/loginNavBar.component.jsx";
import { CustomerContext} from "../../components/contextAPI/customerContext";

const LoginCustomers = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { customer, setCustomer } = useContext(CustomerContext);

    const handleSignIn = async () => {
        try {
            console.log("Email customer:", email);
            console.log("Password:", password);

            const response = await
                axios.post('http://localhost:8000/customers/login', {
                    email: email,
                    password: password
                });
            console.log("response:",response);

            if (response.data.success) {
                setCustomer({email: email});
                navigate('/restaurants');
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
      <div className="container">
        <MDBContainer className="my-5">
          <MDBCard>
            <div class="bg-image">
              <div>
                <img id="bgimg" src={image1} class="img-fluid" alt="Sample" />
              </div>
              <div class="mask">
                <div class="d-flex justify-content-center align-items-center h-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="#FFF"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <MDBRow className="g-0 d-flex align-items-center">
              <MDBCol md="12">
                <MDBCardBody className="text-center">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="form1"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ textAlign: "left" }}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="form2"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ textAlign: "left" }}
                  />
                  <div className="d-flex justify-content-between mx-4 mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Remember me"
                    />
                    <a href="!#">Forgot password?</a>
                  </div>

                  <MDBBtn className="mb-4 text-center" onClick={handleSignIn}>
                    <b className="text">Sign in</b>
                  </MDBBtn>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </div>
    </div>
  );
};

export default LoginCustomers;
