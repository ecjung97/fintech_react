import { useState, useCallback } from 'react'; // useState는 상태 관리를 위해서, useCallBack은 메모리 최적화를 위해서
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState(''); // 배열 구조 분해 할당

  const onChange = useCallback((e) => {
    /* useCallBack Hook을 사용해서 component가 re-rendering 될 떄 마다 새로운 함수를 생성하는 것이 아니라 한 번 함수를 만들고 재사용할 수 있게 하여
    메모리 최적화를 시킨다. 성능향상 */
    setValue(e.target.value);
    console.log(e.target.value);
  }, []); // 2번째 인자값으로 빈배열을 넣으면 랜더링 될 때마다 만들었던 함수를 계속해서 재사용하게 되어 메모리가 최적화

  const onSubmit = useCallback(
    /*  onSubmit 이벤트로 처리한 이유는 입력필드에서 엔터키를 눌렀을 때도 이벤트를 발생시키기 위해서이다.
        반면 onClick은 엔터키 이벤트를 처리하기 위해서 별도의 onKeyPress코드를 추가해야 한다. */
    (e) => {
      onInsert(value); // onInsert로 value값 전달
      setValue(''); // value초기화

      e.preventDefault(); // submit 이벤트는 브라우저에서 새로고침이 발생한다. 이를 방지하기 위해 이 함수를 호출
    },
    [onInsert, value] // props로 onInsert의 App.js 부모요소로 입력한 값 전달
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
