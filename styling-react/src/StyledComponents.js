import styled, { css } from "styled-components";

const Box = styled.div`
  /*  props로 넣어준 값을 직접 전달해 줄 수 있다. */
  background: ${(props) => props.color || "blue"};
  /*  backgroud 속성값에 props를 조회해서 props.color의 값을 사용하게 함.
        color값이 주어지지 않았을 때는 기본값 blue를 벼경색으로 사용한다. */
  padding: 1rem;
  display: flex; /* flex layout */

  width: 1024px;
  margin: 0 auto; /* 상하 바깥여백은 없애고 좌우 바깥 여백을 자동으로 설정하여 요소를 수평 가눙데 정렬 시킨다. */
  @media (max-width: 1024px) {
    /* 반응형 웹디에 해당하는 미디어 퀴리이다. 가로 너비가 1024px이면 너비를 768px로 설정한다. */
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%; /* 상대적 크기단위로 브라우저 크기 그대로 한다. */
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 14px;
  padding: 0.5rem;
  display: flex;
  align-items: center; /* flex layout에서 수직 중앙정렬 */
  box-sizing: border-box; /* 기본적으로 css의 박스 모델에서는 content-box가 적용된다. 
		이는 요소의 너비와 높이가 컨텐츠(content) 영역만을 기준으로 계산한다.
		border-box는 요소의 너비와 높이를 테두리와 안쪽 여백을 포함해서 계산한다.
		이렇게 하면 테두리와 안쪽 여백이 요소의 크기에 포함되므로 요소의 크기를 더 정확하게 제어할 수 있다. */
  font-size: 1rem;
  font-weight: 600;

  /* & 를 사용해서 Sass와 마찬가지로 함께 css 가 적용 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* 다음 코드는 inverted값이 true인 경우 조건부 랜더링의 의해서(&&) 특정 스타일이 적용부여 된다. */
  ${(props) =>
    props.inverted &&
    css`
      background: none; /* 배경색 제거. */
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}
  & + button {
    /* & + button은 현재 요소의 다음 형제 요소 중에서 태그 이름이 button인 요소를 선택한다. 
			이렇게 선택된 요소에 margin-left: 10rem; 속성을 적용해서 왼쪽 바깥 여백을 추가한다. */
    margin-left: 10rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    {" "}
    {/* color속성에값에 black을 넣어주면 이 값이 props로 전달된다. */}
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만 그린다.</Button>
  </Box>
);

export default StyledComponent;
