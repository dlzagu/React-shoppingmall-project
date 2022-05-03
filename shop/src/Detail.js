import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';
import './Detail.scss';
import { connect } from 'react-redux';
import Cart from './Cart';


function Detail(props) {
    let [modal, modalChange] = useState(true);
    useEffect(() => {
        let 타이머 = setTimeout(() => modalChange(false), 2000);
        var arr = localStorage.getItem('watched');
        if(arr == null){
            arr = []
        }else arr = JSON.parse(arr);
        
        arr.push(찾은상품.id);
        arr = new Set(arr);
        arr = [...arr];
        localStorage.setItem('watched', JSON.stringify(arr) );
        return () => { clearTimeout(타이머) } // 혹시 모르는 버그를 제거하기 위해 컴포넌트가 사라질때 타이머 제거 
    }, []); // [] 페이지 로드 될때 한번만 실행 
    let { id } = useParams();
    let history = useHistory();
    let 찾은상품 = props.상품.find((a) => { return a.id == id });
    let [누른탭,누른탭변경]=useState(0);
    let [스위치, 스위치변경]= useState(false);
   
  
    return (
        <div className="container">
            <div className="Detail-title">Detail</div>
            {
                modal === true ?
                    <Modal></Modal>
                    : null

            }
            <div className="row">
                <div className="col-md-6">
                    <img src={찾은상품.이미지주소} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}</p>
                    <Info 재고={props.재고} />
                    <div className='mb-4'>
                        <span>size:</span> 
                        <select className='size-pick'>
                            <option value= "*">- [필수] 옵션을 선택해 주세요- </option>
                            <option value= "**">---------------------------- </option>
                           {
                               찾은상품.size.map((a)=>{
                                   return(
                                       <option value={a}>{a}</option>
                                   )
                               })
                           }
                        </select>
                    </div>
                    <button className="btn btn-danger" onClick={() => {
                        let 차감된재고 = [...props.재고]
                        let size = document.querySelector('.size-pick');
                        차감된재고[0] -= 1
                        if (size.value>0){
                            props.재고변경(차감된재고);
                            props.dispatch({type:'항목추가',payload:{id:찾은상품.id,name:찾은상품.title,quan:1,size:size.value}});
                            history.push('/cart');
                        }
                        
                        

                    }}>주문하기</button>
                    
                    <button className="btn btn-danger" onClick={() => {
                        history.goBack();
                    }}>뒤로가기</button>
                </div>
             </div>
             <RecentlyView 상품={props.상품} />
            
                <Nav variant="tabs" defaultActiveKey="link-0" className='mt-5'>
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false);누른탭변경(0)}}>Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false);누른탭변경(1) }}>Option 2</Nav.Link>
                    </Nav.Item>
                </Nav>
                <CSSTransition in={스위치} classNames="wow" timeout={500}>
                    <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
                </CSSTransition>
               
        </div>
    )
}
let Modal = () => {
    return <div className="my-alert"><p>재고가 얼마 남지 않았습니다.</p></div>
}
let Info = (props) => {
    return (
        <p>재고 : {props.재고[0]} </p>
    )
}
function TabContent(props){
    useEffect(()=>{
        props.스위치변경(true);
    })
 
    if (props.누른탭 === 0){
        return <div>내용0</div>
      } else if (props.누른탭 === 1){
        return <div>내용1</div>
      } 
}


function RecentlyView(props){
    let recnetlyList = JSON.parse(localStorage.getItem('watched'));
    let history = useHistory();
    
   return(
    
      <div className='row'>
      <h4 className='mt-4'>최근 본 상품</h4>
      
    
    { 
    recnetlyList!==null
    ?
      recnetlyList.map((a,i)=>{
        let 찾은이미지 = props.상품.find((Product)=>Product.id===a);
        return(
          <div className='col-md-4' key = {i} onClick={()=>{history.push(history.push(`/detail/${찾은이미지.id}`));}}>
          <img src={찾은이미지.이미지주소} width="50%" />
          </div>
        )
      })
      :
      null
    }
      
  </div>
  
   )
  }
  
  function state를props화(state) {
    return {
      state: state.reducer,
      alert열렸니: state.reducer2
    }
  }

export default connect(state를props화)(Detail);