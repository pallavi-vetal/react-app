import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
class NavComponent extends Component {
    
    render() { 
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">UBS</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              
            </Nav>
            
          </Navbar>
        );
    }
}
 
export default NavComponent;