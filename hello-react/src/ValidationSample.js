import { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  }; // 각 생태속성값 초기화

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    }); // 비번 입력필드값을 가져와서 상태변수 password값 변경
  };

  handleButtonClick = () => {
    alert('비밀번호 값 : ' + this.state.password);
    this.setState({
      clicked: true,
      validated: this.state.password === '7777',
    });
    this.input.focus(); // 비번 입력필드로 포커스 이동
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        &nbsp;&nbsp;
        <button type="button" onClick={this.handleButtonClick}>
          검증하기
        </button>
      </div>
    );
  }
}

export default ValidationSample;
