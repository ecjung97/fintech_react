import { useReducer } from "react";

function reducer(state, action) {
  // action.type에 따라 다른 작업을 수행

  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default: // 해당 사항 없을 때 기존 상태값 반환
      return state;
  }
}

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  /* useReducer react hook의 첫번째 parameter에는 reducer 함수, 두번째 parameter에는 상태초기값 */

  return (
    <div>
      <p>
        현재 count 값은 <strong>{state.value}</strong> 입니다.
      </p>
      <button type="button" onClick={() => dispatch({ type: "INCREMENT" })}>
        +1
      </button>
      &nbsp;
      <input
        type="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
        value="-1"
      />
    </div>
  );
};

export default Counter2;
