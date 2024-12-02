import { useParams } from "react-router-dom"; // URL Parameter는 React Hook인 useParams를 사용.

const data = {
  veloport: {
    name: "김민준",
    description: "React를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공"
  },
};

const Profile = () => {
  const params = useParams();

  const profile = data[params.username]; // username URL parameter를 통하여 프로필을 조회.
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </div>
  )
};


export default Profile;
