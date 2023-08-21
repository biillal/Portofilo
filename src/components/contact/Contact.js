import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './contact.css'
import img from '../../assets/photo.jpg'
function Contact() {
    return (
        <div id="contact" style={{ marginTop: "50px" }}>
            <Container >
                <div className='title-contact'>
                    <h2>Contact</h2>
                    <span className='border-contact'>
                        <span className='sub-border-exp'></span>
                    </span>
                </div>
                <Row style={{ marginTop: '50px' }} className='container-contact'>
                    <Col lg='6' md='12' sm='12' >
                        <img src={img} className='img-contact' />
                    </Col>
                    <Col lg='6' md='12' sm='12' >
                        <div className='header-contact'>
                            <Form style={{marginTop:'15px'}}> 
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{color:"white"}}>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{color:"white"}}>Message</Form.Label>
                                    <Form.Control as="textarea" placeholder='Message ...' rows={3} />
                                </Form.Group>
                                <Button  className='btn-contact' size="lg">
                                    Envoyer
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
