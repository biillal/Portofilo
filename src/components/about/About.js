import React, { useState } from 'react'
import './About.css';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import img from '../../assets/dev.png'
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';

function About() {
  const [aboutFilter, setAboutFilter] = useState("ABOUT")
  return (
    <div id='about'>
      <Container>
        <h2 className='text text-center' style={{ color: "white" }}>About Me</h2>
        <h6 className='text text-center' style={{ color: "#bcaaa4" }}>Why chose me ?</h6>
        <Row style={{ marginTop: "20px" }}>
          <Col style={{ color: 'white' }} lg='4' md="3">
            <div className='list-group'>
              <button className={`btn-list ${aboutFilter === "ABOUT" ? "active" : ""}`} onClick={() => setAboutFilter("ABOUT")} >About Me</button>
              <button className={`btn-list ${aboutFilter === "EDUCATION" ? "active" : ""}`} onClick={() => setAboutFilter("EDUCATION")} >Edication</button>
              <button className={`btn-list ${aboutFilter === "SKILLS" ? "active" : ""}`} onClick={() => setAboutFilter("SKILLS")}>Skills</button>
              <button className={`btn-list ${aboutFilter === "PROJECT" ? "active" : ""}`} onClick={() => setAboutFilter("PROJECT")}>projects</button>
            </div>
          </Col>
          <Col style={{ color: 'white' }} lg='8' md="9">
            {
              aboutFilter === "ABOUT" && <div className='abouts'>
                <div>
                  <img src={img} className='img-about' />
                </div>
                <div>
                  <h2>I'm Billal Boudjella</h2>
                  <p style={{ color: "#bcaaa4" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed accumsan sem. Nunc placerat, metus at sagittis consequat, libero augue viverra erat, sit amet lacinia mi augue et ex</p>
                  <div >
                    <h6>Connect with me:</h6>
                    <div className='d-flex justify-content-between' style={{width:'50px'}}>
                      <span><a href='https://www.facebook.com/billal.boudjella.79'><i class="ri-facebook-fill"></i></a></span>
                      <span><a href='https://www.instagram.com/boudjellabillal/?hl=fr'><i class="ri-instagram-fill"></i></a></span>
                      <span><a href=''></a></span>
                    </div>
                  </div>
                </div>
              </div>
            }
            {
              aboutFilter === "EDUCATION" && <Education />
            }
            {
              aboutFilter === "SKILLS" && <Skills />
            }
            {
              aboutFilter === "PROJECT" && <Projects />
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
