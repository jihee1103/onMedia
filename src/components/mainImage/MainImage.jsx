import styles from "./mainImage.module.scss";

function MainImage({ type }) {
  const imagePaths = {
    digital: "/assets/digitalAward/1.png",
    mobile: "/assets/mobileAward/1.png",
    appliance: "/assets/applianceAward/1.png",
  };

  return (
    <img src={imagePaths[type]} className={styles.mainImage} alt={`${type}`} />
  );
}

export default MainImage;
