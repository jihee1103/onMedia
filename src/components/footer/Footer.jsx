import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <img src="/assets/et-logo.svg" alt="로고" />
        </div>
        <div className="v-line"></div>
        <div className="info">
          <p>주소 : etnews-ad@naver.com</p>
          <p>이메일 : etnews-ad@naver.com</p>
          <p>전화번호 : 02-2201-9502</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
