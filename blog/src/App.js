/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','청주오마카세']);
  let [따봉개수, 따봉개수변경] = useState([0,0,0]);
  let [modal, modalChange] = useState(false);
 
  // function 제목바꾸기(){
  //   var 새로운제목 = [...글제목];
  //   새로운제목.sort();
  //   글제목변경(새로운제목); 
  // }
  
  return (
    <div className="App">
     <div className="black-nav">
       <div>개발 Blog</div>
     </div>
    {
      글제목.map((a,i)=>{
        
        return(
          <div className="list">
          <h3 > {a}<span onClick={()=>{
            var 새로운따봉개수 = [...따봉개수];
            새로운따봉개수[i] = 따봉개수[i]+1
            따봉개수변경(새로운따봉개수)
            }}>👍</span>{따봉개수[i]}</h3>
          <p>2월 17일 발행</p>
          <hr/>
        </div>
        )
       
      })
    }
     <button onClick={()=>{
       modalChange(!modal);
     }}>모달창열기</button>
     {
       modal === true
       ? <Modal></Modal>
       : null
     }
     
    </div>

  );
}
function Modal(){
  return(
    <div className='modal'>
       <h2>제목</h2>
       <p>날짜</p>
       <p>상세나용</p>
     </div>
  );

}
export default App;
