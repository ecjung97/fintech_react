import { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  }; // 상태속성값 초기화

  /*
  constructor(props) {
    super(props); // 부모의 생성자 호출
    this.state = {
      // 상태속성 number 초기값 설정
      number: 0,
      fixedNumber: 0,
    };
  } // 생성자 메서드
  */

  render() {
    const { number, fixedNumber } = this.state; // 상태속성 state number 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          type="button"
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
        &nbsp;&nbsp;
        <button
          type="button"
          // onClick 클릭 이벤트가 발생했되었을 때 실행할 문장을 지정
          onClick={() => {
            //this.setState({ number: number + 1 });
            // 클래스 컴포넌트에서는 setState()함수를 사용하여 상태 속성 number값을 1씩 증가하면서 변경시킴
            //this.setState({ number: this.state.number + 1 });

            /*
            this.setState((prevState) => {
              return {
                number: prevState.number + 1, // prevState는 기존 상태
              };
            });

            this.setState((prevState) => ({
              number: prevState.number + 1,
            })); // 카운트가 2식 증가
            */

            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState가 호출되었습니다!');
                console.log(this.state);
              }
            );
          }}
        >
          +1 or +2
        </button>
      </div>
    );
  }
}

export default Counter;
