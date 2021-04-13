/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // state 데이터, state 변경 함수
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '남양주 카페 추천']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  // state는 직접 건드리지 않고 deep copy 한다음 원하는 부분을 변경하고 state 변경 함수로 다시 넣어줌
  // 즉, 일단 기존 state 카피본 만들고 카피본에 수정사항 반영하고 변경함수()에 집어넣기
  function 제목바꾸기(){
    var newArray = [...글제목];  // deep copy
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>Dev Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
      <Modal />
    </div>
  );
}

// New Component
// 규칙 - 1. 첫글자는 대문자 2. return 안에 있는건 태그하나로 묶어야 함
// 언제 컴포넌트 씀? - 1. 반복출현하는 HTML 덩어리들 2. 자주 변경되는 HTML UI들 3. 다른 페이지 만들 때
function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
