import { useState, useRef } from "react";

const BoardWrite = () => {
  const [name, setName] = useState(""); // 배열 구조분해 할당
  const [title, setTitle] = useState("");
  const [pwd, setPwd] = useState("");
  const [content, setContent] = useState(""); // 상태관리를 useState hook으로 한다.

  const nameInputRef = useRef(null); // 입력필드로 포커스 이동시키기 위한 useRef hook 사용
  const titleInputRef = useRef(null);
  const pwdInputRef = useRef(null);
  const contentInputRef = useRef(null);

  // onSubmit event 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    /* e.preventDefault()는 form data가 제출될 때 browswer가 새로고침되는 것을 막기 위한 code이다. */
    if (name === "") {
      alert("글쓴이를 입력하세요!");
      nameInputRef.current.focus();
      return;
    }

    if (!title) {
      alert("제목을 입력하세요!");
      titleInputRef.current.focus();
      return;
    }

    if (!pwd) {
      alert("비밀번호를 입력하세요!");
      pwdInputRef.current.focus();
      return false;
    }

    if (!content) {
      alert("글내용을 입력하세요!");
      contentInputRef.current.focus();
      return false;
    }

    // 전송 이후 Google Chrome에서 F12 단축키 console모드에 출력확인
    console.log("글쓴이 : ", name);
    console.log("글제목 : ", title);
    console.log("비밀번호 : ", pwd);
    console.log("글내용 : ", content);

    // data 전송 후 상태속성값 초기화를 해서 입력필드 초기화
    setName("");
    setTitle("");
    setPwd("");
    setContent("");
  };

  const handleReset = (e) => {
    setName("");
    setTitle("");
    setPwd("");
    setContent("");
    nameInputRef.current.focus();
  };

  return (
    <div>
      <h2>리액트 게시판 입력폼</h2>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">글쓴이 : </label>
          <input
            name="name"
            id="name"
            size="14"
            ref={nameInputRef}
            value={name}
            onChange={(e) => setName(e.target.value)} // e.target.value는 입력필드 값을 가져옴.
          />
        </div>
        <br />
        <div>
          <label htmlFor="title">글제목 : </label>
          <input
            name="title"
            id="title"
            size="36"
            ref={titleInputRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="pwd">비밀번호 : </label>
          <input
            type="password"
            name="pwd"
            id="pwd"
            size="14"
            ref={pwdInputRef}
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="content">글내용 : </label>
          <textarea
            name="content"
            id="content"
            rows="10"
            cols="36"
            ref={contentInputRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">글등록</button>&nbsp;
        <button type="reset" onClick={handleReset}>
          취소{" "}
        </button>
      </form>
    </div>
  );
};

export default BoardWrite;
