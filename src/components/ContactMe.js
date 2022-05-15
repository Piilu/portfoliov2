import {  Form,Button } from 'react-bootstrap';
import React from 'react';

function ContactMe(props) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Nimi</Form.Label>
                <Form.Control type="text" placeholder="Leo Kukk" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Teema</Form.Label>
                <Form.Control type="text" placeholder="Praktika" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Sisu</Form.Label>
                <Form.Control placeholder='Sisu' as="textarea" rows={5} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Button>Saada</Button>
            </Form.Group>
        </Form>
    );
}

export default ContactMe;