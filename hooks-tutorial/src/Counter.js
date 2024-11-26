import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  /*  초기값을 0으로 설정. useState 리액트 Hook(훅)을 사용한 상태관리=>
        배열 구조 분해할당(배열 비구조 분해할당문법).
        value는 상태속성 현재값을 저장하고, setValue는 이 값을 변경하는 setter()함수에 해당. */

  // 2씩 증가 카운터 함수정의
  const handleIncrease = () => {
    setValue(value + 2);
  };

  // 2씩 감소 카운터 함수정의
  const handleDecrease = () => {
    setValue(value - 2);
  };

  return (
    <div>
      <p>
        현재 카운트 값은 <strong>{value}</strong> 입니다.
      </p>
      <input type="button" value="-2감소" onClick={handleDecrease} />
      &nbsp;&nbsp;
      <input type="button" value="-1감소" onClick={() => setValue(value - 1)} />
      &nbsp;&nbsp;
      <input type="button" value="+1증가" onClick={() => setValue(value + 1)} />
      &nbsp;&nbsp;
      <input type="button" value="+2감소" onClick={handleIncrease} />
      {/*
        문제) button태그를 사용해서 2씩 증가/감소하는 카운터를 만들어 보자. 2씩 증가하는 별도 함수 handleIncrease를
        정의해서 구현한고, 2씩 감소하는 별도 함수 handleDecrease를 정의해서 구현. 이벤트는 onClick을 사용.
      */}
    </div>
  );
};

export default Counter;
