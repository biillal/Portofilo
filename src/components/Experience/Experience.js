import React from 'react'
import './experience.css'
import { Col, Container, Row } from 'react-bootstrap'
function Experience() {
    return (
        <div id='experience' style={{ marginTop: "100px" }}>
            <Container>
                <div className='title-experience'>
                    <h2>Experience</h2>
                    <span className='border-experience'>
                        <span className='sub-border-exp'></span>
                    </span>
                </div>

                <Row>
                    <Col lg="6" md="12" sm="12">
                        <div className='single-experience-container'>
                            <div className='single-experience'>
                                <span className='experience-icon'>
                                    <i class="ri-briefcase-line"></i>
                                </span>
                                <h6>2021-2022</h6>
                                <h5>site web</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed accumsan sem
                                </p>
                            </div>
                            <div className='single-experience'>
                                <span className='experience-icon'>
                                    <i class="ri-briefcase-line"></i>
                                </span>
                                <h6>2021-2022</h6>
                                <h5>site web</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed accumsan sem
                                </p>
                            </div>
                            <div className='single-experience'>
                                <span className='experience-icon'>
                                    <i class="ri-briefcase-line"></i>
                                </span>
                                <h6>2021-2022</h6>
                                <h5>site web</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed accumsan sem
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" mg="6" sm="12">
                        <div className='single-experience-container'>
                            <div className='single-experience'>
                                <span className='experience-icon'>
                                    <i class="ri-briefcase-line"></i>
                                </span>
                                <h6>2021-2022</h6>
                                <h5>site web</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed accumsan sem
                                </p>
                            </div>
                            <div className='single-experience'>
                                <span className='experience-icon'>
                                    <i class="ri-briefcase-line"></i>
                                </span>
                                <h6>2021-2022</h6>
                                <h5>site web</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed accumsan sem
                                </p>
                            </div>
                            <div className='single-experience'>
                                <span className='experience-icon'>
                                    <i class="ri-briefcase-line"></i>
                                </span>
                                <h6>2021-2022</h6>
                                <h5>site web</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed accumsan sem
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Experience
