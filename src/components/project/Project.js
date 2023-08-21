import React from 'react'
import './project.css'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import img from '../../assets/photo.jpg'
import Carousel from 'react-multi-carousel';
function Project() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div id='projet' style={{ marginTop: "50px" }}>
            <Container>
                <div className='title-project'>
                    <h2>Project</h2>
                    <span className='border-project'>
                        <span className='sub-border-prj'></span>
                    </span>
                </div>

                <Carousel responsive={responsive}>
                    <Col lg="4" md="6" sm="12" >
                        <div className='project-card'>
                            <div className='project-img'>
                                <img src={img} className="w-100" />
                            </div>
                            <div className='project-content'>
                                <div className='content-top'>
                                    <h6>front-end developper</h6>
                                    <a href="">View live</a>
                                </div>
                                <h5>React Landing Page</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="12" >
                        <div className='project-card'>
                            <div className='project-img'>
                                <img src={img} className="w-100" />
                            </div>
                            <div className='project-content'>
                                <div className='content-top'>
                                    <h6>front-end developper</h6>
                                    <a href="">View live</a>
                                </div>
                                <h5>React Landing Page</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="12" >
                        <div className='project-card'>
                            <div className='project-img'>
                                <img src={img} className="w-100" />
                            </div>
                            <div className='project-content'>
                                <div className='content-top'>
                                    <h6>front-end developper</h6>
                                    <a href="">View live</a>
                                </div>
                                <h5>React Landing Page</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="12" >
                        <div className='project-card'>
                            <div className='project-img'>
                                <img src={img} className="w-100" />
                            </div>
                            <div className='project-content'>
                                <div className='content-top'>
                                    <h6>front-end developper</h6>
                                    <a href="">View live</a>
                                </div>
                                <h5>React Landing Page</h5>
                            </div>
                        </div>
                    </Col>
                </Carousel>;

            </Container>
        </div>
    )
}

export default Project
