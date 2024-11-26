import { useState, useMemo } from "react";
/* useMemo react hook을 사용하면 성능을 최적화 해서 향상 시킬 수 있다. rendering 과정에서 특정 값이 변경될 때만
연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 재사용하는 방식이다. */

const getAverage = (numbers) => {
  console.log("평균값 계산중...");

  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b); // reduce()함수는 배열의 모든 요소를 처리하여 하나의 누적합을 구함.
  return sum / numbers.length; // 평균을 반환
};

const Average2 = () => {
  const [list, setList] = useState([]); // 배열 구조분해 할당. list는 배열.
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value); // e.target.value는 입력필드의 입력값을 가져온다.
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number)); // 입력필드에 입력한 숫자를 담은 number값을 정수 숫자로 변경해서 배열에 추가해 반환
    setList(nextList);
    setNumber(""); // number상태 속성값이 초기화
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  const avg = useMemo(() => getAverage(list), [list]); // 성능 최적화

  return (
    <div>
      <label htmlFor="number">
        평균을 구할 정수숫자입력(Average2컴포넌트) :{" "}
      </label>
      <input
        name="number"
        value={number}
        size="14"
        onChange={onChange}
        onKeyDown={onKeyPress}
      />
      &nbsp;
      <input type="button" value="등록" onClick={onInsert} />
      <hr />
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        평균값 = <strong>{avg}</strong>
      </div>
    </div>
  );
};

export default Average2;
