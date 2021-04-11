import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // state 데이터, state 변경 함수
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '남양주 카페 추천']);

  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div>Dev Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } </h3>
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
    </div>
  );
}

export default App;
