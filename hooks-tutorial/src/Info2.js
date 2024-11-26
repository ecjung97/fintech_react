import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
const Info2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <label htmlFor="name">이름 : </label>
        <input name="name" id="name" value={name} onChange={onChange} />
        <br />
        <br />
        <label htmlFor="nickname">닉네임 : </label>
        <input
          name="inckname"
          id="nickname"
          value={nickname}
          onChange={onChange}
        />
      </div>
      <hr />
      <div>
        <div>
          이름 : <strong>{name}</strong>
        </div>
        <div>
          닉네임 : <strong>{nickname}</strong>
        </div>
      </div>
    </div>
  );
};

export default Info2;
