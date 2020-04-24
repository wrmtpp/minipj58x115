import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";


const Footer = () => {
    return (

        <MDBFooter color="primary-color" className="font-small darken-3 pt-0">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12" className="py-3">
                        <div className="mb-5 flex-center">
                            <a className="fb-ic" href="https://www.facebook.com/man.prompen">
                                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                                </i>
                            </a>
                            <a className="md-ic" href="https://medium.com/@5835512115/mini-project-7a66fbc0ef2f">
                                <MDBIcon fab icon="medium-m mr-md-5 mr-3 fa-2x" />
                            </a>

                            <a className="gh-ic" href="https://github.com/wrmtpp/minipj58x115">
                                <MDBIcon fab icon="github mr-md-5 mr-3 fa-2x" />
                            </a>

                            <a className="yt-ic" href="https://www.youtube.com/">
                                <MDBIcon fab icon="youtube mr-md-5 mr-3 fa-2x" />
                            </a>

                            <a className="ig-ic" href="https://www.instagram.com/wrmt_pp/">
                                <MDBIcon fab icon="instagram mr-md-5 mr-3 fa-2x" />
                            </a>
                            
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <a href="/"> 5835512115 </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;