import { Component, useState } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  }; // 상태 속성값 초기값 설정

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={(e) => {
            /* 문제) text input 입력필드에 입력한 값을 웹브라우저 F12개발툴 콘솔탭에 출력되게 해보자. */
            //console.log(e.target.value); // 리액트에서 e.target.value는 입력필드값을 가져온다.
            this.setState({
              // message 상태속성값 변경, 클래스형 컴포넌트 방법에서는 setState()를 통해서 자기자신 상태속성값을 변경
              message: e.target.value,
            });
          }}
        />
        &nbsp;&nbsp;
        <button
          type="button"
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: '', // 상태속성값 초기화
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
