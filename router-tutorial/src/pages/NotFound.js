const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center', // 플랙스 레이아웃에서 수직 가운데 정렬
        justifyContent: 'center', // 플렉스 레이아웃에서 수평 가운데 정렬
        fontSize: 32,
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      해당 경로에 파일이 없습니다. 404 NotFound 에러 입니다.
    </div>
  );
};

export default NotFound;
