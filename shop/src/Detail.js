import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props) {
    let{id}=useParams();
    let history = useHistory();
    let 찾은상품 = props.상품.find((a)=>{return a.id==id});
    let 찾은상품2 = props.상품.filter((a)=>{return a.id==id});
    // find 배열안의 조건에 만족하는 하나의 오브젝트를 배열로 변경  {} <<안남음
    // filter 배열안의 조건에 만족하지 않는 오브젝트를 삭제 {} << 남음
    return (
        <div className="container">
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
export default Detail;