import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Login from './Login';
import MyPage from './MyPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />

        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
      {/* path에 와일드카드 *로 설정하면 아무 문자와 매칭한다는 뜻이다. 이 Routing *보다 상단에 위치하는 Route들의 규칙을 
          모두 확인하고, 일치하는 Route(Routing 주소)가 없다면 이 Route *에 해당하는 NotFound가 Rendering 된다. */}
    </Routes>
  );
};

export default App;
