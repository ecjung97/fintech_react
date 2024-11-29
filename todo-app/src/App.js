import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  const nextId =
    useRef(
      4
    ); /* 고유값으로 사용될 id, useRef Hook을 사용한 이유는 id는 랜더링 되는 것이 아니기 때문에
  값만 1 증가되는 것은 랜더링 할 필요가 없다. 단순히 새로운 항목을 참조만 하기 때문이다. */

  // 배열에 새로운 항목 추가
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo)); // todos배열에 todo 추가
    nextId.current += 1; // nextId 1씩 증가
  }, []); // 컴포넌트 성능을 최적화 하기 위해서 useCallback() Hook을 사용. props로 부모 App.js에서 자식 component인 TodoInsert로 전달되어야 한다.

  // 배열에서 항목제거
  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    /*  배열에서 filter() 함수를 사용하면 Callback함수가 true를 반환하면 해당 요소는 배열에 포함하고, false를 반환하면 배열에서 포함되지 않는다. 즉, 삭제된다.
        결국 id가 같으면 배열에서 삭제된다. */
  }, []);

  // 항목 수정
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
