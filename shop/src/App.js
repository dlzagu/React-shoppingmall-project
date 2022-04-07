import React, { useState } from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import './App.css';
import Product from './data';

function App() {


  let [상품, 상품변경] = useState(Product);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">zhuro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='jumbotron'>
        <h1>20% SeasonOff</h1>
        <p>asdasd</p>
        <button type="button" class="btn btn-primary">Primary</button>
      </div>
      <div className='container'>
        <div className='row'>
          {
            상품.map((a) => {
              return(
                <상품진열 주소={a.이미지주소} 제목={a.title} 내용={a.content} 가격={a.price}></상품진열>
              )
            })
          }
         
        </div>
      </div>
    </div>
  );
}
function 상품진열(props) {
  return (
    <div className='col-md-4'>
      <img src={props.주소} width="100%" />
      <h4>{props.제목}</h4>
      <p>{props.내용} & {props.가격}</p>
    </div>
  )
}

export default App;
