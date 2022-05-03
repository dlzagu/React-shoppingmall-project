import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';

let alert초기값 = true;
function reducer2(state = alert초기값,액션){
  if(액션.type==='닫기'){
    state = false;
    return state;
  }
  return state
}

let 초기값  = [
 
  
];


function reducer (state = 초기값, 액션){
  if(액션.type === '항목추가'){
    let copy = [...state];
    if(copy.filter(a=> a.name===액션.payload.name && a.size===액션.payload.size).length){
      copy.find(a=> a.name===액션.payload.name && a.size ===액션.payload.size).quan++;
    }
    
    else copy.push(액션.payload);
    return copy;
  }
  else if(액션.type === '수량증가'){
    let copy = [...state];
    copy.find(a=> a.id===액션.data && a.size===액션.size).quan++;
   
    return copy
  }else if(액션.type === '수량감소'){
    let copy = [...state];
    if(copy.find(a=> a.id===액션.data && a.size===액션.size).quan>0){
      copy.find(a=> a.id===액션.data && a.size===액션.size).quan--;
    }
    
    return copy
  }else if(액션.type ==='삭제'){
    let copy = [...state];
    copy.splice(copy.findIndex(a=>a.id===액션.data && a.size===액션.size),1);
    return copy;
  }
  else {
    return state
  }
} 

let store = createStore(combineReducers({reducer,reducer2}));


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
