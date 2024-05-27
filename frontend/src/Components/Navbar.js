import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import cart_icon from '../Images/cart_icon.png';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import Login from './pages/Login.js';

function BasicExample() {
  const [cartCount, setCartCount] = useState(0);
  const handleSearch = () => {
    // Add your search logic here
    console.log('Searching...');
  };

  const addToCart = () => {
    // Implement your logic to add items to the cart
    // For demonstration, increment the cart count by 1
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
      <Link to="/"><Navbar.Brand>Shopify</Navbar.Brand></Link>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      
      <Form inline>
        <Row>
          <Col xs="auto" className='pe-0'>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
          </Col>
          <Col xs="auto" className="search-icon mt-1">
            {/* Search icon */}
            <FontAwesomeIcon icon={faSearch} onClick={handleSearch} />
          </Col>
          <Col>
          <Link to="/Login">
            {/* <Button variant="outline-dark" onclick="/pages/Login">Login</Button> */}
            {/* </Link> */}
          <div style={{border: '0.1rem solid #000000b5',borderRadius: '100px',width: '40px',height: '40px',justifyContent: 'center',alignContent: 'center',background:'#80808029'}}>
            <FontAwesomeIcon icon={faUser} style={{height:'26px',color:'#000000b5'}}/>
            </div>
            </Link>
          </Col>
        </Row>
      </Form>
      <Col xs="auto" className='cart'>
      <Link to="/Cart"><img src={cart_icon} alt=""/>
      {cartCount > 0 && <div className='nav-cart-count'>{cartCount}</div>}
            </Link>
      </Col>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
