import styles from "./awardedCompany.module.scss";
import IndexTitle from "../index/IndexTitle";

function AwardedCompany({ type, year = 2024 }) {
  const awardedImages = {
    digital: {
      2025: "/assets/digitalAward/digital-2025awarded.jpeg",
      2024: "/assets/digitalAward/digital-2024awarded.jpg",
    },
    mobile: { 2024: "/assets/mobileAward/mobile-2024awarded.png" },
    appliance: { 2025: "/assets/applianceAward/appliance-2025awarded.jpg" },
  };

  return (
    <div className={styles.awarded}>
      <div>
        <IndexTitle type={type}>{year} 수상사</IndexTitle>
      </div>
      <div className={styles.awardedCompany}>
        <img src={awardedImages[type][year]} alt={`${type} ${year} 수상사`} />
      </div>
    </div>
  );
}

export default AwardedCompany;
