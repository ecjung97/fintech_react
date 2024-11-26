import { Component } from 'react';

class EventPractice2 extends Component {
  state = {
    message: '',
  }; // 상태속성 정의와 초기화

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  };

  /*
  constructor(props) {
    super(props); // 부모 생성자 호출
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  } // 생성자 메서드

  handleChange(e) {
    this.state({
      message: e.target.value, // e.target.value는 입력필드 값을 가져온다.
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '', // 속성 초기화
    });
  }
*/

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="주소 입력"
          value={this.state.message}
          onChange={this.handleChange}
        />
        &nbsp;
        <input type="button" value="확인" onClick={this.handleClick} />
      </div>
    );
  }
}

export default EventPractice2;
