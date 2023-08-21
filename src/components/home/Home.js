import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Home.css';
import Typed from 'react-typed';
import photo from '../../assets/dev.png'
export default function Home() {
    useEffect(()=>{
       window.scrollTo(0, 0)
    },[])
    return (
        <div id='home' style={{ width: '100%' }}>
            <Container>
                <Row>
                    <Col  md='8' xs='12'>
                        <h6 className='sub-title'>welcome to my world</h6>
                        <div>
                            <span className='im'>I'm </span>
                            <Typed
                                strings={[
                                    "Billal Boudjella",
                                    `Full Stack Developper  `,
                                    "Mern stack Dev",
                                    "Designer",
                                ]}
                                typeSpeed={150}
                                backSpeed={100}
                                loop
                                className='typed'
                            />
                        </div>
                        <div className='description-home'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed accumsan sem. Nunc placerat, metus at sagittis consequat, libero augue viverra erat, sit amet lacinia mi augue et ex. Vestibulum auctor feugiat sem eu lacinia. Ut est nibh, tincidunt quis pretium et, dictum non urna. Sed efficitur a odio vitae sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis sem ut dapibus iaculis. Integer neque sem, commodo nec interdum a, consequat non sapien.
                        </div>
                        <div className='button-home'>
                            <Button className='btn1-home'>Download CV</Button>
                        </div>
                    </Col>
                    <Col md='3' xs='12'>
                        <img src={photo} className='image' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
