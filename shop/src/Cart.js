import React from "react";
import { Table } from "react-bootstrap"
import { connect } from "react-redux";
function Cart(props) {
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {
          props.state.map((a,i)=>{
          return(
            <tr>
          <td>{i+1}</td>
          <td>{a.name}</td>
          <td>{a.quan}</td>
          <td>{a.name}</td>
        </tr>
          )
          })
        }
      </Table>
    </div>
  )
}
function state를props화(state) {
  return {
    state: state
  }
}


export default connect(state를props화)(Cart);