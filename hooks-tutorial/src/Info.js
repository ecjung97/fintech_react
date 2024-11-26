import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  //useEffect(() => {
  // useEffect 리액트 훅은 랜더링 이후에 실행되는 작업을 주로 설정한다.
  //console.log("랜더링이 완료되었습니다.");
  /* console.log({
      name,
      nickname,
    }); */
  //}, []); // 두번째 배열 인자값에 빈배열인 []을 넣으면 처음 랜더링될 때만 두번 실행이 되고, 수정이 될때는 실행되지 않음.

  useEffect(() => {
    console.log(name);
  }, [name]);
  /* 두번째 파라미터로 name을 넣어주면 이름이 변경될 때 해당작업이 수행됨. 결국 실행하고 싶은 값을 넣어주면 된다.
  결국 useEffect 리액트 Hook(훅)은 랜더링 되고 난 이후 어떤 특정작업을 수행하고자 할 때 사용한다.
  두번째 파라미터 배열에 어떤 값을 넣어주는 것에 따라서 실행되는 조건이 달라짐. */

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value); // e.target.value는 각 입력필드 값을 가져온다.
  };

  return (
    <div>
      <div>
        <label for="name">이름 : </label>
        <input
          type="text" // type속성 생략 시 기본값(default)은 text.
          name="name"
          id="name"
          value={name}
          onChange={onChangeName}
        />
        &nbsp;&nbsp;
        <label for="nickname">닉네임 : </label>
        <input
          // type속성 생략 시 기본값(default)은 text.
          name="nickname"
          id="nickname"
          value={nickname}
          onChange={onChangeNickname}
        />
        <hr />
      </div>

      <div>
        <b>이름 : </b>
        {name}
      </div>
      <div>
        <b>닉네임 : </b>
        {nickname}
      </div>
    </div>
  );
};

export default Info;
