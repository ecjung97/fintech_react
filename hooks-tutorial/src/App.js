//import Counter from "./Counter";
//import { useState } from "react";
//import Info from "./Info";
//import Counter2 from "./Counter2";
//import Info2 from "./Info2";
//import Average from "./Average";
//import Average2 from "./Average2";
//import Average3 from "./Average3";
//import Average4 from "./Average4";
//import BoardWrite from "./BoardWrite";
// import Info3 from "./Info3";
// import MemberJoin from "./MemberJoin";
// import MemberInsert from "./MemberInsert";
import LoginForm from "./LoginForm";

const App = () => {
  //const [visible, setVisible] = useState(false);

  //return <Counter />;
  //return <Counter2 />;
  //return <Info2 />;
  //return <Average />;
  //return <Average2 />;
  //return <Average3 />;
  //return <Average4 />;
  //return <BoardWrite />;
  // return <Info3 />;
  // return <MemberJoin />;
  // return <MemberInsert />;
  return <LoginForm />;

  // return (
  //   <div>
  //     <button
  //       type="button"
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? "숨기기" : "보이기"}
  //     </button>
  //     <hr />
  //     {visible && <Info />}
  //     {/* visible == true 이면 && AND 조건부 랜더링 연산에 의해서 해당 Info컴포넌트가 보이고, false 이면 랜더링되지 않음. == true가 생략됨. */}
  //   //</div>
  // //);
};
export default App;
