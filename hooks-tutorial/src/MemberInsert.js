import { useState, useRef } from "react";

const MemberInsert = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
  }); // useState Hook으로 상태속성괎 초기화.

  const [errors, setErrors] = useState({});

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null); // 입력 field로 focus 이동.

  const handleChange = (e) => {
    const { name, value } = e.target; // 각 입력 field 값을 가져와서 저장.
    setFormData({
      ...formData,
      [name]: value,
    }); // 각 name parameter 값을 form data로 한꺼번에 저장.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.username) {
      newErrors = { ...newErrors, username: "사용자 이름을 입력하세요." };
      usernameRef.current.focus();
    }

    if (!formData.password) {
      newErrors = { ...newErrors, password: "비밀번호를 입력하세요." };
      if (Object.keys(newErrors).length === 0) passwordRef.current.focus();
    }

    if (!formData.fullName) {
      newErrors = { ...newErrors, fullName: "이름을 입력하세요." };
      fullNameRef.current.focus();
    }

    if (!formData.email) {
      newErrors = { ...newErrors, email: "이메일을 입력하세요." };
      emailRef.current.focus();
    }

    // 유효성 검사 통과 시 실행.
    if (Object.keys(newErrors).length === 0) {
      alert("회원가입이 완료되었습니다.");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <h2>회원가입</h2>
      <div>
        <label htmlFor="username">아이디 : </label>
        <input
          name="username"
          id="username"
          size="16"
          value={formData.username}
          onChange={handleChange}
          ref={usernameRef}
        />
        {errors.username && (
          <div style={{ color: "red" }}>{errors.username}</div>
        )}
      </div>
      <div>
        <label htmlFor="password">비밀번호 : </label>
        <input
          type="password"
          id="password"
          name="password"
          size="16"
          value={formData.password}
          onChange={handleChange}
          ref={passwordRef}
        />
        {errors.password && (
          <div style={{ color: "red" }}>{errors.password}</div>
        )}
      </div>
      <div>
        <label htmlFor="fullName">이름 : </label>
        <input
          name="fullName"
          id="fullName"
          size="16"
          value={formData.fullName}
          onChange={handleChange}
          ref={fullNameRef}
        />
        {errors.fullName && (
          <div style={{ color: "red" }}>{errors.fullName}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">이메일 : </label>
        <input
          type="email"
          name="email"
          id="email"
          size="30"
          value={formData.email}
          onChange={handleChange}
          ref={emailRef}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </div>
      <button type="submit">가입하기</button>
    </form>
  );
};

export default MemberInsert;
