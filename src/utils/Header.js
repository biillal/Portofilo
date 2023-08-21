import React, { useEffect, useRef } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './header.css'
function Header() {
    const headerRef = useRef(null)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
                headerRef.current.classList.add('header_sheik')
            }else{
                headerRef.current.classList.remove('header_sheik')
            }
        })
       
    },[])
    return (
        <>
            <Navbar expand="lg" sticky='top' ref={headerRef} style={{height:'60px'}}>
                <Container>
                    <Navbar.Brand href="#home" style={{ margin: '0 250px 0 0', color: "white" }}>Portfolio </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav' style={{ color: "white" }}>
                        <div style={{display:'flex',justifyContent:'space-between',width:"100%"}}>
                            <Nav  >
                                <Nav.Link href='#home' style={{ color: "white" }}>Home</Nav.Link>
                                <Nav.Link href='#about' style={{ color: "white" }}>About Me</Nav.Link>
                                <Nav.Link href='#services' style={{ color: "white" }}>Services</Nav.Link>
                                <Nav.Link href='#experience' style={{ color: "white" }}>Experience</Nav.Link>
                                <Nav.Link href='#projet' style={{ color: "white" }}>Project</Nav.Link>
                                <Nav.Link href='#contact' style={{ color: "white" }}>Contact</Nav.Link>
                            </Nav>

                            <Nav>
                                <Button >Telk Me</Button>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
