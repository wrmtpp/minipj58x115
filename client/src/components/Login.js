import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './Login.css'
import config from '../config'
import { FormGroup, Input } from 'reactstrap';
import Img2 from './Img2'
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {

        e.preventDefault();
        config.auth().signInWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }


    const signup = e => {

        e.preventDefault()
        config.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <div className="LoginForm" >
            <form>
                <MDBContainer>
                    <h2>Signup</h2><br />
                    <FormGroup>
                        <Input type="email" name="email" id="exampleEmail"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" id="examplePassword"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>

                    <MDBBtn size="md" color="success" onClick={login}><MDBIcon icon="sign-in-alt" className="mr-2" />Login</MDBBtn>
                    <MDBBtn size="md" color="primary" onClick={signup}> <MDBIcon icon="user" className="mr-2" />Register</MDBBtn>
                    <Img2 />

                </MDBContainer>
            </form>
        </div>
    )
}

export default Login;