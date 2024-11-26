import { useState } from "react";

const LoginForm = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (userid === "" || password === "") {
      setError("ID와 비밀번호를 모두 입력해 주세요!");
    } else {
      // 유효성 통과 시
      console.log("아이디 : " + userid);
      console.log("비밀번호 : " + password);

      // 로그인 처리 후 상태 초기화
      setUserid("");
      setPassword("");
      setError("");
    }
  };

  return (
    <form method="post" onSubmit={handleLogin}>
      <div>
        <label htmlFor="userid">아이디 : </label>
        <input
          id="userid"
          size="16"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="password">비밀번호 : </label>
        <input
          type="password"
          id="password"
          size="16"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <hr />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <hr />
      <input type="submit" value="로그인" />
    </form>
  );
};

export default LoginForm;
