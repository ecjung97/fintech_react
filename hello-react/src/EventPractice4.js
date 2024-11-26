import { useState } from 'react';

const EventPractice4 = () => {
  const [username, setUsername] =
    useState(''); /* 배열구조 분해 할당. username은 상태속성(변수),
    setUsername은 상태속성값을 변경하는 setter()메서드 즉 함수이다. username 초기값을 ''으로 할당.
    리액트 훅 useState를 사용한 배열 구조분해 할당인 비구조화 문법이다. */
  const [address, setAddress] = useState('');
  const onChangeUsername = (e) =>
    setUsername(
      e.target.value
    ); /* setter()함수를 호출하면서 username상태 속성값 변경.
    e.target.value는 입력필드값을 가져온다. */
  const onChangeAddress = (e) => setAddress(e.target.value);
  const onClick = () => {
    alert('사용자명은 ' + username + '이고, 주소는 ' + address + ' 입니다.');
    setUsername(''); // 각 상태속성(변수) 초기화
    setAddress('');
  };

  const keyPress = (e) => {
    if (e.key === 'Enter') onClick(); // onClick()함수 호출
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      &nbsp;&nbsp;
      <input
        type="text"
        name="address"
        placeholder="주소입력"
        onChange={onChangeAddress}
      />
      &nbsp;&nbsp;
      <button type='button" onClick' onClick={onClick}>
        확인
      </button>
    </>
  );
};

export default EventPractice4;
