import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillSunFill } from 'react-icons/bs'
import { BsMoonStars } from 'react-icons/bs';
//api key da64ec71a3a349f906eb016faac5a891
const NavComponent = () => {
    return (
        <>
            <Navbar className='navbar ' >
                <Container>
                    <Navbar.Brand href="#home" className='fs-2 fw-bold text-white'>Movie<span className='maniac-text'>Maniac</span></Navbar.Brand>
                    <Nav className="ms-auto" >
                        <Nav.Link href="#home" className='text-white' >Home</Nav.Link>
                        <Nav.Link href="#features" className='text-white'>Latest</Nav.Link>
                        <Nav.Link href="#pricing" className='text-white'>Popular</Nav.Link>
                    </Nav>
                    <div className="theme-mode d-flex gap-2 pointer">
                        <BsFillSunFill />
                        <BsMoonStars />
                    </div>
                </Container>
            </Navbar>


        </>
    )
}

export default NavComponent