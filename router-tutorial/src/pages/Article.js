import { useParams, Link } from 'react-router-dom';

const Article = () => {
  const { id } = useParams(); // useParams Hook을 사용해서 url parameter 값을 구함. 구조 분해 할당 문법

  return (
    <div>
      <h2>게시글 {id}</h2>
      <Link to="/articles">게시판 목록</Link>
    </div>
  )
}

export default Article;