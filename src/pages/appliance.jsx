import AwardedCompany from "../components/awardedCompany/AwardedCompany";
import Evaluation from "../components/evaluation/Evaluation";
import HostLogo from "../components/hostLogo/HostLogo";
import Intro from "../components/intro/Intro";
import MainImage from "../components/mainImage/MainImage";
import RewardDetail from "../components/rewardDetail/RewardDetail";
import Schedule from "../components/schedule/Schedule";
import styles from "./appliance.module.scss";

function Appliance() {
  return (
    <>
      <MainImage type={"appliance"} />
      <div className={styles.pageWrapper}>
        <HostLogo type={"appliance"} />
      </div>
      <Intro type={"appliance"} />
      <div className={styles.pageWrapper}>
        <Schedule type={"appliance"} />
        <Evaluation type={"appliance"} />
        <RewardDetail type={"appliance"} />
        <AwardedCompany type={"appliance"} />
      </div>
    </>
  );
}

export default Appliance;
