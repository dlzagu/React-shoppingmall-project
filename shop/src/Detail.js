import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Detail.scss';

function Detail(props) {
    let [modal,modalChange]=useState(true);
    useEffect(()=>{
        let 타이머 =setTimeout(()=>modalChange(false),2000);
        return ()=> {clearTimeout(타이머)} // 혹시 모르는 버그를 제거하기 위해 컴포넌트가 사라질때 타이머 제거 
    },[]); // [] 페이지 로드 될때 한번만 실행 
    let{id}=useParams();
    let history = useHistory();
    let 찾은상품 = props.상품.find((a)=>{return a.id==id});
    let 찾은상품2 = props.상품.filter((a)=>{return a.id==id});
    // find 배열안의 조건에 만족하는 하나의 오브젝트를 배열로 변경  {} <<안남음
    // filter 배열안의 조건에 만족하지 않는 오브젝트를 삭제 {} << 남음
    return (
        <div className="container">
            <div className="Detail-title">Detail</div>
            { 
            modal === true?
            <Modal></Modal>
            :null

            }
            <div className="row">
                <div className="col-md-6">
                    <img src={찾은상품.이미지주소} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-danger" onClick={()=>{
                        history.goBack();
                    }}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}
let Modal = () =>{
    return <div className="my-alert"><p>재고가 얼마 남지 않았습니다.</p></div>
} 
export default Detail;