import styles from "./AwardedCompany.module.scss";
import IndexTitle from "../index/Index";

function AwardedCompany({ type }) {
  const awardedImages = {
    digital: "/assets/digitalAward/digital-2024awarded.jpg",
    mobile: "/assets/mobileAward/mobile-2024awarded.png",
    appliance: "/assets/mobileAward/mobile-2024awarded.png",
  };

  return (
    <div className={styles.awarded}>
      <IndexTitle type={type}>2024 수상사</IndexTitle>
      <div className={styles.awardedCompany}>
        <img src={awardedImages[type]} alt={`${type} 2024 수상사`} />
      </div>
    </div>
  );
}

export default AwardedCompany;
