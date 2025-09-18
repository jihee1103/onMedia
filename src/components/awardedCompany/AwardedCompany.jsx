import styles from "./awardedCompany.module.scss";
import IndexTitle from "../index/IndexTitle";

function AwardedCompany({ type }) {
  const awardedImages = {
    digital: "/assets/digitalAward/digital-2025awarded.jpeg",
    mobile: "/assets/mobileAward/mobile-2024awarded.png",
    appliance: "/assets/applianceAward/appliance-2024awarded.jpg",
  };

  return (
    <div className={styles.awarded}>
      <div>
        <IndexTitle type={type}>2025 수상사</IndexTitle>
      </div>
      <div className={styles.awardedCompany}>
        <img src={awardedImages[type]} alt={`${type} 2024 수상사`} />
      </div>
    </div>
  );
}

export default AwardedCompany;
