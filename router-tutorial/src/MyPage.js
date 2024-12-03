import { Navigate } from 'react-router-dom';

const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
    /*  Navigate component는 component를 화면에 보여지는 순간 다른 page로 이동하고 싶을 때 사용한다. 
          to="/login"에 의해서 login routing주소로 redirect 된다.
          replace={true}로 설정하면 현재 페이지를 history 기록에 남기지 않기 때문에 이동 후 뒤로가기를 눌렀을 때 두 페이지 전의 페이지로 이동한다. */
  }

  return <div>마이 페이지</div>;
};

export default MyPage;
