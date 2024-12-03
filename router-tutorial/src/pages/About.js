import { Link, useLocation, useSearchParams } from 'react-router-dom';

/* useLocation Hook 특징)
    1. location 객체를 반환하고 현재 사용자가 보고 있는 페이지 정보를 담고 있다. 이 객체에는 다음과 같은 속성이 있다.
        1-1. pathname: 현재 주소 경로(?뒤의 쿼리스트링은 제외)
        1-2. search: ?문자를 포함한 쿼리스트링의 값
 */

const About = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams(); // 배열 구조 분해 할당
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <h1>소개</h1>
      {/* <p><Link to='/'>홈으로</Link></p> */}
      <p>react router를 사용해 보는 project입니다.</p>
      <p>쿼리 스트링을 제외한 현재 주소 경로 : {location.pathname}</p>
      <p>?를 포함한 쿼리스트링 값 : {location.search}</p>
      <p>
        detail : <strong>{detail}</strong>
      </p>
      <p>
        mode : <b>{mode}</b>
      </p>
      <button type="button" onClick={onToggleDetail}>
        Toggle detail
      </button>
      &nbsp;
      <button type="button" onClick={onIncreaseMode}>
        Mode +1
      </button>
    </div>
  );
};

export default About;
