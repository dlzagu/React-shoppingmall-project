import React, { useState } from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import './App.css';
import Product from './data';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';
import Cart from './Cart';
import { useHistory } from 'react-router-dom';


function App() {


  let [상품, 상품변경] = useState(Product);
  let [loading, loadingChange] = useState(false);
  let [재고, 재고변경] = useState([10,11,12])


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link to="/">zhuro</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail/1">Detail</Nav.Link>
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
                    <Card 상품={상품[i]} key={i} />
                  )
                })
              }
            </div>
            { loading===true
            ? ()=> {return(
              <div className="loading">
              ....loading
            </div>
            )}
            : null
              
            }
            <button className="btn btn-primary" onClick={() => {
              loadingChange(true);
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                 상품변경([...상품,...result.data]);
                 loadingChange(false);
                })
                .catch(() => console.log("실패"));
            }}>더보기</button>
            <RecentlyView 상품={상품}/>
          </div>
          
        </Route>
        <Route path="/detail/:id">
          <Detail 상품={상품} 재고={재고} 재고변경={재고변경} />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  function 이미지누르면 (){
    history.push(history.push(`/detail/${props.상품.id}`));
    if(최근본상품ID가져오기!==null){
      let newID = JSON.parse(최근본상품ID가져오기);
      if (!newID.includes(props.상품.id)){
        newID.push(props.상품.id);
        localStorage.setItem("id",JSON.stringify(newID));
      }
      
    }else{
      localStorage.setItem("id",JSON.stringify([props.상품.id]));
    }
    

  }
  let history = useHistory();
  let 최근본상품ID가져오기 = localStorage.getItem("id");
  
  return (
    <div className='col-md-4' onClick={이미지누르면}>
      <img src={props.상품.이미지주소} width="100%" />
      <h4>{props.상품.title}</h4>
      <p>{props.상품.content} & {props.상품.price}</p>
    </div>
  )
}
function RecentlyView(props){
  let recnetlyList = JSON.parse(localStorage.getItem("id"));
  let history = useHistory();
 return(
  
    <div className='row'>
    <h4 className='mt-4'>최근 본 상품</h4>
    
  
  { 
  recnetlyList!==null
  ?
    recnetlyList.map(a=>{
      let 찾은이미지 = props.상품.find((상품)=>상품.id===a);
      return(
        <div className='col-md-4' onClick={()=>{history.push(history.push(`/detail/${찾은이미지.id}`));}}>
        <img src={찾은이미지.이미지주소} width="100%" />
        </div>
      )
    })
    :
    null
  }
    
</div>

 )
}

export default App;
