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
            <MDBFooter className='text-center text-white' >
                <MDBContainer className='pt-4'>
                    <section className='mb-4'>

                        <a
                            className='btn btn-link btn-floating btn-lg text-dark m-1'
                            href='https://github.com/Piilu'
                            target="_blank"
                            role='button'
                            data-mdb-ripple-color='dark'
                        >
                            <VscGithubAlt />
                        </a>
                    </section>
                </MDBContainer>

                <div className='text-center text-dark p-3' >
                    © 2022 Copyright

                </div>
            </MDBFooter>
        </div>
    );
}

export default Footer;