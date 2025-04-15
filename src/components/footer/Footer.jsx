import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="company">전자신문사</div>
        </div>
        <div className="footer-info">
          <p className="info-title">전자신문 어워드 사무국</p>
          <div className="info-contact">
            <p>
              <span className="info-label">E-mail</span>etnews-ad@naver.com
            </p>
            <p>
              <span className="info-label">Tel</span>02-2201-9502
            </p>
          </div>
          <p className="copyright">
            © 2025 THE ELECTRONIC TIMES. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
