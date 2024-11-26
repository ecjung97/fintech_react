import { useState } from 'react';
/*  
  리액트 16.8 이전 버전에서는 함수 컴포넌트에서 state를 사용할 수 없었다.
  하지만 16.8 이후부터는 useState라는 함수 즉, 리액트 훅(Hook)이 추가됨으로써 
  이 함수를 사용하여 함수 컴포넌트에서도 state 상태속성값을 다룰 수 있게 되었다.
*/

const Say = () => {
  const [message, setMessage] = useState(''); // 함수 인자에는 초기값 설정, 배열 구조분해 할당
  /*
		첫번째 message는 현재 상태 속성이고, 두번째 setMessage는 상태속성값을 바꾸는 함수이다. 즉, setter()함수이다.
	*/
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히 가세요');

  const [color, setColor] = useState('red'); // 초기값으로 red설정

  return (
    <div>
      <button type="button" onClick={onClickEnter}>
        입장
      </button>
      &nbsp;&nbsp;&nbsp;
      <button type="button" onClick={onClickLeave}>
        퇴장
      </button>
      <hr />
      <h1 style={{ color }}>{message}</h1>
      <button
        type="button"
        style={{ color: 'gold' }}
        onClick={() => setColor('gold')}
      >
        금색
      </button>
      &nbsp;&nbsp;
      <button
        type="button"
        style={{ color: 'orange' }}
        onClick={() => setColor('orange')}
      >
        오렌지
      </button>
      &nbsp;&nbsp;
      <button
        type="button"
        style={{ color: 'blue' }}
        onClick={() => setColor('blue')}
      >
        파란색
      </button>
    </div>
  );
};

export default Say;
