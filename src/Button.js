function Button({ text, work }) {
  //console.log(props);
  //Q. 이건 무슨 문장? 주석 풀고 실행하면 콘솔창에 안나옴
  return (
    <div>
      <button disabled={work}>{text}</button>
      {/* disables 프로퍼티는 사용자가 버튼을 누를수 없도록 비활성화하는거다. */}
      {/* 즉 특정 요건이 충족될때까지 개발자는 비활성화를 걸어놓고 나중에 지운다. */}
    </div>
  );
}
export default Button;
