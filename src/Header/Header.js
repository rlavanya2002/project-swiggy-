import React from 'react'
import './Header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Bag, Cart, ChevronDown, GeoAltFill, GeoFill, Percent, Person, Search, ShieldExclamation } from 'react-bootstrap-icons';
import { BiLocationPlus } from 'react-icons/bi';
import { FaPersonWalkingDashedLineArrowRight } from 'react-icons/fa6';

function Header() {
    return (
     <div className='view'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div className='logo'>
            
         
          </div>
          <p className='other'>other</p>
          <ChevronDown className='arow'></ChevronDown>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav  className='nav-link'
            
              style={{ maxHeight: '300px' }}
              navbarScroll
            >
              <Nav.Link xhref="./Section3" className='corporate' target='-blank'><Bag className='icon'></Bag>Swiggy Corporate</Nav.Link>
              <Nav.Link href="#action2" className='search'><Search className='icon'></Search>Search</Nav.Link>
              <Nav.Link href="#action2" className='search'><Percent className='icon'></Percent>Offers</Nav.Link>
              <Nav.Link href="#action2" className='search'><ShieldExclamation className='icon'></ShieldExclamation>Help</Nav.Link>
              <Nav.Link href="#action2" className='search'><Person className='icon'></Person>Sign in</Nav.Link>
              <Nav.Link href="#action2" className='search'><Cart className='icon'></Cart>Cart</Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
    
  }
  

export default Header