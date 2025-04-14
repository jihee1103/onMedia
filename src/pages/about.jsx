import styles from "./about.module.scss";

function About() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.contactContainer}>
          <div className={styles.title}>CONTACT</div>
          <div className={styles.underline}></div>

          <div className={styles.infoWrapper}>
            <div className={styles.infoBox}>
              <div className={styles.companyName}>전자신문 어워드 사무국</div>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>E-mail</span>
                  <span>etnews-ad@naver.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Tel</span>
                  <span>02-2201-9502</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
