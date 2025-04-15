import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuLine, RiCloseFill } from "react-icons/ri";
import styles from "./mobileMenu.module.scss";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const menuItems = [
    { name: "K-디지털브랜드 대상", path: "/k-digital" },
    { name: "대한민국 모바일서비스 대상", path: "/mobile" },
    { name: "대한민국 가전대상", path: "/appliance" },
    { name: "CONTACT", path: "/about" },
  ];

  const handleMenuOptionClick = () => {
    setIsMenuOpen(false); // 메뉴 항목 클릭 시 메뉴 닫기
  };

  return (
    <div className={styles.mobileNav}>
      <div className={styles.mobileNavHeader}>
        <Link to="/">
          <img
            className={styles.logo}
            src="/assets/awards-logo.svg"
            alt="전자신문 로고"
          />
        </Link>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? (
            <RiCloseFill size={30} aria-label="메뉴 닫기" />
          ) : (
            <RiMenuLine size={30} aria-label="메뉴 열기" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={styles.menuItem}
              onClick={handleMenuOptionClick}
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
