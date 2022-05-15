import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
} from 'mdbreact';
import { VscGithubAlt } from 'react-icons/vsc';
function Footer(props) {
    return (
        <div id='footer'>
            <MDBFooter className='text-center text-black ' >
                <MDBContainer className='p-4 pb-0'>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size='auto' className='mb-4 mb-md-0'>
                                <p className='pt-2'>
                                    Email: piilrainer@gmail.com
                                </p>
                            </MDBCol>

                            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                                <a
                                    className='btn btn-link btn-floating btn-lg text-dark m-0'
                                    href='https://github.com/Piilu'
                                    target="_blank"
                                    role='button'
                                    data-mdb-ripple-color='dark'
                                >

                                    <VscGithubAlt />
                                </a>
                            </MDBCol>
                            <MDBCol size='auto' className='mb-4 mb-md-0'>
                                Tel: 53018760

                            </MDBCol>
                        </MDBRow>
                    </form>
                </MDBContainer>


                <div className='text-center text-dark p-0  ' >



                </div>
            </MDBFooter>
        </div>
    );
}

export default Footer;