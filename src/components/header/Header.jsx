import awardsLogo from "/src/assets/awards-logo.svg";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div>
          <Link to="/">
            <img src={awardsLogo} className="awards-logo" alt="전자신문" />
          </Link>
        </div>
        <nav className="category">
          <ul>
            <li>
              <Link to="/k-digital">k-디지털브랜드 대상</Link>
            </li>
            <li>
              <Link to="/appliance">대한민국 가전대상</Link>
            </li>
            <li>
              <Link to="/mobile">대한민국 모바일서비스 대상</Link>
            </li>
            <li>
              <Link to="/about">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
