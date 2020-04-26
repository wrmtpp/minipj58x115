import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../config'
import { Nav, Navbar, Form } from 'react-bootstrap'
import { MDBBtn, MDBIcon} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



const Bar = () => {

    const logout = () => {
        config.auth().signOut();
    }

    return (
            <Navbar bg="primary" variant="dark" >
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/covidrealtime">Coronavirus Live Updates</Nav.Link>
                    <Nav.Link href="/commentcovid">Medical record</Nav.Link>
                </Nav>
                <Form inline>
                    <MDBBtn size="md" color="danger" onClick={logout}><MDBIcon icon="user" className="mr-2" />Logout</MDBBtn>
                </Form>
            </Navbar>
    )
}

export default Bar