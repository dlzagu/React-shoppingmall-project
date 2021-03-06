import React from "react";
import { Table } from "react-bootstrap"
import { connect, useDispatch, useSelector } from "react-redux";

function Cart() {

  let state = useSelector((state)=> state);
  let dispatch = useDispatch();

  return (
    <div>
      <Table responsive>
      <tbody> 
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>사이즈</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        </tbody>
        <tbody>
        {
          state.reducer.map((a, i) => {
            return (
              <tr key = {i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.size}</td>
                <td>{a.quan}</td>
                <td>
                <button onClick ={()=>{dispatch({type:'수량증가',data:a.id, size:a.size})}}>+</button>
                <button onClick ={()=>{dispatch({type:'수량감소',data:a.id, size:a.size})}}>-</button>
                <button onClick ={()=>{dispatch({type:'삭제',data:a.id, size:a.size})}}>삭제</button>
                </td>
                
              </tr>
            )
          })
        }
        </tbody>
      </Table>
      {
        state.reducer2?
        <div className="my-alert">
          <p>지금 구매하시면 신규할인 20%</p>
          <button onClick={()=>{dispatch({type:'닫기'})}}>닫기</button>
        </div>
        :null
      }
    </div>
  )
}



export default Cart;