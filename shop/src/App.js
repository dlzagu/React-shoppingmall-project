import React, { useState } from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import './App.css';
import Product from './data';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';


function App() {


  let [상품, 상품변경] = useState(Product);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link to="/">zhuro</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link to="/detail">Detail</Link></Nav.Link>
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
      <Switch>
        <Route exact path="/">
          <div className='jumbotron'>
            <h1>20% SeasonOff</h1>
            <p>asdasd</p>
            <button type="button" class="btn btn-primary">Primary</button>
          </div>
          <div className='container'>
            <div className='row'>
              {
                상품.map((a, i) => {
                  return (
                    <상품진열 상품={상품[i]}></상품진열>
                  )
                })
              }

            </div>
          </div>
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}
function 상품진열(props) {
  return (
    <div className='col-md-4'>
      <img src={props.상품.이미지주소} width="100%" />
      <h4>{props.상품.title}</h4>
      <p>{props.상품.content} & {props.상품.price}</p>
    </div>
  )
}

export default App;
