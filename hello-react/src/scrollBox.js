import { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box; // 구조분해 할당(비구조화 할당 문법)
    /* 위의 코드는 다음과 같은 의미이다.
        const scrollHeight = this.box.scrollHeight;
        const clientheight = this.box.clientHeight;

        scrollHeight : 스크롤이 있는 div박스 안의 높이(650px)
        clientHeight : 스크롤이 있는 박스 높이
        scrollTop : 수직 스크롤바 위치(0~350px)
    */
    this.box.scrollTop = scrollHeight - clientHeight;
  }; // 컴포넌트에서 수직 스크롤바를 맨 아래쪽으로 바로 내리는 메서드

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
