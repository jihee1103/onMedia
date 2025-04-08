import styles from "./k-digital.module.scss";
import HostLogo from "../components/hostLogo/HostLogo";
import Schedule from "../components/schedule/Schedule";
import MainImage from "../components/mainImage/MainImage";
import Evaluation from "../components/evaluation/Evaluation";
import RewardDetail from "../components/rewardDetail/RewardDetail";
import Intro from "../components/intro/Intro";
import AwardedCompany from "../components/awardedCompany/AwardedCompany";

function Kdigital() {
  return (
    <>
      <MainImage type="digital" />
      <div className={styles.pageWrapper}>
        <HostLogo type={"digital"} />
      </div>
      <Intro type={"digital"} />
      <div className={styles.pageWrapper}>
        <Schedule type={"digital"} />
        <Evaluation type={"digital"} />
        <RewardDetail type={"digital"} />
        <AwardedCompany type={"digital"} />
      </div>
    </>
  );
}

export default Kdigital;
