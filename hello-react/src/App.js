/*
import { Fragment } from "react";

function App() {
  const name = '리액트';
  const cityName = '서울시 종로구';

  const style = {
    backgroundColor: 'black', // background-color는 카멜표기법(낙타체)에 의해서 -를 없애고 backgroundColor로 표기한다.
    color:'aqua',
    fontSize: '48px', // font-size -> fontSize
    fontWeight: 'bold', // font-weight -> fontWeight
    padding: 16, // 단위를 생략하면 기본단위가는 px
    textAlign : 'center' // 글자 중앙정렬
  };

  return( <div>
        <p style={style}>{name}</p>
        <p style={{
          backgroundColor: 'gold',
          color:'red',
          fontSize: '52px',
          fontWeight: 'bolder',
          padding: 16,
          textDecoration: 'underline'
        }}
          >{cityName}</p>
  </div>
  );
}
*/

/*
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <div>
      <div className="react">{name}</div>
      <h1>들여쓰기가 이상한</h1>
      <h2>코드</h2>
      <p>입니다.</p>
    </div>
  );
}
*/

/*
// 클래스 컴포넌트로 변경
import './App.css'
import { Component } from 'react';

class App extends Component {
  render() {
    const name = '클래스 컴포넌트 react 입니다';
    return <div className="react">{name}</div>
  }
}
*/

//import MyComponent from './MyComponent';
//import Counter from './Counter';
//import Say from './Say';
//import EventPractice from './EventPractice';
//import EventPractice2 from './EventPractice2';
//import EventPractice3 from './EventPractice3';
//import EventPractice4 from './EventPractice4';
//import EventPractice5 from './EventPractice5';
//import ValidationSample from './ValidationSample';
import { Component } from 'react';
import ScrollBox from './scrollBox';

//const App = () => {
//return (
/*
    <MyComponent name={'React'} favoriteNumber={7}>
      리액트
    </MyComponent>
    */
//<Counter />
//<Say />
//<EventPractice />
//<EventPractice2 />
//<EventPractice3 />
//<EventPractice4 />
//<EventPractice5 />
//<ValidationSample />
//);
//};

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <br />
        <button type="button" onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
