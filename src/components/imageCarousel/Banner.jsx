import { Link } from "react-router-dom";
import "./banner.css"; // 일반 CSS 가져오기 방식

export default function Banner({ src, id }) {
  return (
    <div className="banner-background">
      <Link to={`/${id}`}>
        <img src={src} alt="메인 배경 이미지" className="banner-image" />
      </Link>
    </div>
  );
}
