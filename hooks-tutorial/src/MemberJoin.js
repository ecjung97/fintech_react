import { useState, useRef } from "react";

const MemberJoin = () => {
  const [mem_id, setMem_id] = useState(""); // 각 입력필드에 대한 상태를 useState Hook을 통해서 관리, 배열 구조분해 할당 문법
  const [mem_pwd, setMem_pwd] = useState("");
  const [pwd_chk, setPwd_chk] = useState("");
  const [mem_name, setMem_name] = useState("");
  const [mem_email, setMem_email] = useState("");
  const [mem_phone, setMem_phone] = useState("");

  const mem_idRef = useRef(null); // 입력필드로 포커스를 이동시키기 위한 useRef Hook 이용
  const mem_pwdRef = useRef(null);
  const pwd_chkRef = useRef(null);
  const mem_nameRef = useRef(null);
  const mem_emailRef = useRef(null);
  const mem_phoneRef = useRef(null);

  const handleMemberSubmit = (e) => {
    e.preventDefault();
    /*  이 함수를 호출하면 form이 제출되는 것을 막고, 대산에 JavaScript code에서 원하는 동작을 수행할 수 있다.
        폼이 제출될 때 새로고침되는 동작을 막기 위해서 사용한다. 자체적인 유효성 검사를 실행하고, 통과하면 회원가입 submit을 수행. */

    if (mem_id === "") {
      alert("아이디를 입력!");
      mem_idRef.current.focus();
      return;
    }

    if (!mem_pwd) {
      alert("비번을 입력!");
      mem_pwdRef.current.focus();
      return;
    }

    if (!pwd_chk) {
      alert("비번확인을 입력!");
      pwd_chkRef.current.focus();
      return false;
    }

    if (mem_pwd != pwd_chk) {
      alert("비번이 일치하지 않습니다!");
      setMem_pwd(""); // 비번 입력field 초기화
      setPwd_chk("");
      mem_pwdRef.current.focus();
      return;
    }

    if (!mem_name) {
      alert("회원이름을 입력!");
      mem_nameRef.current.focus();
      return;
    }

    if (!mem_email) {
      alert("이메일을 입력!");
      mem_emailRef.current.focus();
      return;
    }

    if (!mem_phone) {
      alert("폰번호를 입력!");
      mem_phoneRef.current.focus();
      return;
    }

    // form 전송 후 console mode에 출력
    console.log("아이디 : ", mem_id);
    console.log("비밀번호 : ", mem_pwd);
    console.log("회원이름 : ", mem_name);
    console.log("이메일 : ", mem_email);
    console.log("폰번호 : ", mem_phone);

    // data 전송 후 입력field 초기화
    setMem_id("");
    setMem_pwd("");
    setPwd_chk("");
    setMem_name("");
    setMem_email("");
    setMem_phone("");
  };

  const handleReset = () => {
    // useState로 관리하는 각 상태값 초기화
    setMem_id("");
    setMem_pwd("");
    setPwd_chk("");
    setMem_name("");
    setMem_email("");
    setMem_phone("");

    mem_idRef.current.focus(); // ID 입력field로 focus 이동
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form method="post" onSubmit={handleMemberSubmit}>
        <div>
          <label htmlFor="mem_id">회원 아이디 : </label>
          <input
            name="mem_id"
            id="mem_id"
            size="14"
            ref={mem_idRef}
            value={mem_id}
            onChange={(e) => setMem_id(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="mem_pwd">비밀번호 : </label>
          <input
            type="password"
            name="mem_pwd"
            id="mem_pwd"
            size="14"
            ref={mem_pwdRef}
            value={mem_pwd}
            onChange={(e) => setMem_pwd(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="pwd_chk">비밀번호 확인 : </label>
          <input
            type="password"
            name="pwd_chk"
            id="pwd_chk"
            size="14"
            ref={pwd_chkRef}
            value={pwd_chk}
            onChange={(e) => setPwd_chk(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="mem_name">회원 이름 : </label>
          <input
            name="mem_name"
            id="mem_name"
            size="14"
            ref={mem_nameRef}
            value={mem_name}
            onChange={(e) => setMem_name(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="mem_email">이메일 : </label>
          <input
            type="email"
            name="mem_email"
            id="mem_email"
            size="30"
            ref={mem_emailRef}
            value={mem_email}
            onChange={(e) => setMem_email(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="mem_phone">폰 번호 : </label>
          <input
            type="tel"
            name="mem_phnone"
            id="mem_phone"
            size="20"
            ref={mem_phoneRef}
            value={mem_phone}
            onChange={(e) => setMem_phone(e.target.value)}
          />
        </div>
        <hr />
        <button type="submit">가입</button>
        <button type="reset" onClick={handleReset}>
          취소
        </button>
      </form>
    </div>
  );
};

export default MemberJoin;
