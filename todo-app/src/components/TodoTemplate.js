import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
      {/* children은 부모요소값을 자식요소로 가져온다. 부모요소 (ex. App.js) 에 설정된 태그사이의 내용을 가져온다.*/}
    </div>
  );
};

export default TodoTemplate;
