import PropTypes from 'prop-types';
import { Component } from 'react';

// 클래스 컴포넌트
class MyComponent extends Component {
  static defaultProps = {
    name: '기본이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, children, favoriteNumber } = this.props; // 구조분해 할당

    return (
      <div>
        안녕하세요. 제 이름은 {name} 입니다.
        <br />
        children 값은 {children} 입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

/*
const MyComponents = ({ name, favoriteNumber, children }) => { // 구조분해 할당 (비구조화 할당문법)으로 함수 파라미터 값으로 처리
  //const { name, children } = props; // 구조분해 할당
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다.
      <br/>
      children 값은 {children} 입니다.
      <br/>
      가장 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};
*/

/*
// 부모 컴포넌트로부터 전달받은 props가 없을 때 설정되는 값
MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
*/

export default MyComponent;
