import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  // App.js에서 전달된 todos를 가져온다.
  /*  todos배열을 map()함수로 TodoListItem으로 이루어진 배열로 변환해서 랜더링한다.
      todo epdlxjsms todo={todo} 라는 형태로 props를 사용하여 자식컴포넌트인 TodoListItem으로 전달한다. 
      map() 함수를 사용하기 위해서는 고유한 키값을 정의해야 한다. */
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
