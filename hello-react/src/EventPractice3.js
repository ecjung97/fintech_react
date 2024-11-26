import { Component } from 'react';

class EventPractice3 extends Component {
  state = {
    username: '',
    message: '',
  }; // 속성정의와 초기화

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      /*
        e.target.name의 뜻은 각 input 입력필드의 네임파라미터 이름을 가리킴.
        입력필드값을 가져올 때는 e.target.value를 사용한다.
      */
    });
  };

  handleClick = () => {
    alert(this.state.username + ' : ' + this.state.message);
    this.setState({
      username: '',
      message: '', // 각 상태속성값 초기화
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Enter키인 경우 실행
      this.handleClick(); // handleClick() 함수 메서드 호출
    }
  }; // Enter 키를 눌렀을 때 발생하는 이벤트 처리

  render() {
    return (
      <div>
        {/* 한줄 또는 한줄 이상 주석문 */}
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="message"
          placeholder="메시지 이력"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress} // onKeyPress가 곧 없어질 것 (deprecated, 가운데 줄그어짐) 이여서 onKeyUp 또는 onKeyDown 사용.
        />
        &nbsp;&nbsp;
        <button type="button" onClick={this.handleClick}>
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice3;
