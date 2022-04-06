/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','청주오마카세']);
  let [따봉개수, 따봉개수변경] = useState(0);
 
  function 제목바꾸기(){
    var 새로운제목 = [...글제목];
    새로운제목.sort();
    글제목변경(새로운제목); 
  }
  
  return (
    <div className="App">
     <div className="black-nav">
       <div>개발 Blog</div>
     </div>
     <button onClick={제목바꾸기}>버튼</button>
     <div className="list">
       <h3> {글제목[0]} <span onClick={()=>{따봉개수변경(따봉개수+1)}}>👍</span>{따봉개수}</h3>
       <p>2월 17일 발행</p>
       <hr/>
     </div>
     <div className="list">
       <h3> {글제목[1]}</h3>
       <p>2월 17일 발행</p>
       <hr/>
     </div>
     <div className="list">
       <h3> {글제목[2]}</h3>
       <p>2월 17일 발행</p>
       <hr/>
     </div>
     
    </div>

  );
}

export default App;
