import { Link, Outlet, NavLink } from 'react-router-dom';

const Articles = () => {
  // const activeStyle = {
  //   color: 'green',
  //   fontSize: 21,
  // };

  return (
    <div>
      <Outlet />
      {/* Outlet은 중첩 Route의 자식요소로 들어있는 각 게시글 내용 JSX요소를 랜더링한다.
          App.js에 설정한 자식요소인 <Route path=":id" elements={<Article /> /> 내용이 보여진다. */}
      <ul>
        <li>
          <Link to="/">홈으로</Link>
        </li>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
        {/*
        <li>
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          ></NavLink>
           <Link to="/articles/1">게시글 1</Link>
        </li>*/}
        {/*<li>
          <NavLink
            to="/articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          ></NavLink>
           <Link to="/articles/2">게시글 2</Link>
        </li> */}
        {/*<li>
          <NavLink
            to="/articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          ></NavLink>
           <Link to="/articles/3">게시글 3</Link> 
        </li>*/}
      </ul>
    </div>
  );
};

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };

  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 <strong>{id}</strong>
      </NavLink>
    </li>
  );
};

export default Articles;
