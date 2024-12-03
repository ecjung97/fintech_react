import { Link, Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  /* useNavigate Hook은 Link Component를 사용하지 않고 다른 page로 이동해야 하는 경우에 사용한다. */

  const goBack = () => {
    // 이전 page로 이동
    navigate(-1);
  };

  const goArticles = () => {
    // 게시글(판) 목록인 articles routing주소로 이동
    // navigate('/articles');
    navigate('/articles', { replace: true });
    // replace: true option을 사용하면 page를 이동할 때 현재 page를 page 기록에 남기지 않는다.
  };

  return (
    <div>
      <header
        style={{
          background: 'lightgray',
          padding: 6,
          fontSize: 24,
          width: 960,
          height: 100,
        }}
      >
        {/* {{}}} 두 개의 중괄호를 사용하는 것은 JSX에서 JavaScript 객체를 전달하는 방식 */}
        <p style={{ fontSize: 16 }}>
          <Link to="/">홈으로</Link>
        </p>
        <button type="button" onClick={goBack}>
          뒤로가기
        </button>
        &nbsp;
        <button type="button" onClick={goArticles}>
          게시글(판) 목록
        </button>
      </header>

      <main>
        <Outlet />
        {/* Outlet은 App.js에 설정한 중첩 Route의 자식요소로 들어있는 안쪽 Route에 해당하는 컴포넌트 JSX요소를 Renderingg 해준다. */}
      </main>

      <footer
        style={{
          background: 'gold',
          padding: 6,
          fontSize: 16,
          width: 960,
          height: 100,
        }}
      >
        하단 영역: 서울시 종로구 00{' '}
      </footer>
    </div>
  );
};

export default Layout;
