import styles from "./rewardDetail.module.scss";
import IndexTitle from "../index/IndexTitle";

function RewardDetail({ type }) {
  // type 파라미터를 사용하여 조건부 렌더링
  if (type === "digital") {
    return (
      <>
        <div>
          <IndexTitle type={"digital"}>홍보특전</IndexTitle>
        </div>
        <div className={styles.rewardWrapper}>
          <div className={styles.reward}>
            <img src="/assets/digitalAward/digital-news1.jpg" />
            <div>전자신문 지면기사</div>
          </div>
          <div className={styles.reward}>
            <img src="/assets/digitalAward/digital-news2.png" />
            <div>전자신문 온라인기사</div>
          </div>
          <div className={styles.reward}>
            <img src="/assets/digitalAward/digital-reward1.jpg" />
            <div>상패</div>
          </div>
        </div>
        <div className={styles.rewardWrapper}>
          <div className={styles.reward}>
            <div className={styles.emblem}>
              <img src="/assets/digitalAward/digital-reward2.png" />
              <img
                src="/assets/digitalAward/digital-reward3.png"
                className={styles.emblem2}
              />
            </div>
            <div>수상 엠블럼</div>
          </div>
        </div>
      </>
    );
  } else if (type === "appliance") {
    return (
      <>
        <div>
          <IndexTitle type={"appliance"}>홍보특전</IndexTitle>
        </div>
        <div className={styles.rewardWrapper}>
          <div className={styles.reward}>
            <img src="/assets/applianceAward/appliance-news1.jpg" />
            <div>전자신문 지면기사</div>
          </div>
          <div className={styles.reward}>
            <img src="/assets/applianceAward/appliance-news2.png" />
            <div>전자신문 온라인기사</div>
          </div>
          <div className={styles.reward}>
            <img src="/assets/applianceAward/appliance-reward1.jpg" />
            <div>상패</div>
          </div>
        </div>
        <div className={styles.rewardWrapper}>
          <div className={styles.reward}>
            <img src="/assets/applianceAward/appliance-reward2.jpg" />
            <div>수상 인증서</div>
          </div>
          <div className={styles.reward}>
            <div className={styles.emblem}>
              <img src="/assets/applianceAward/appliance-reward3.png" />
              <img src="/assets/applianceAward/appliance-reward4.png" />
            </div>
            <div>수상 엠블럼</div>
          </div>
        </div>
      </>
    );
  } else if (type === "mobile") {
    return (
      <>
        <div>
          <IndexTitle type={"mobile"}>홍보특전</IndexTitle>
        </div>
        <div className={styles.rewardWrapper}>
          <div className={styles.reward}>
            <img src="/assets/mobileAward/mobile-news1.jpg" />
            <div>전자신문 지면기사</div>
          </div>
          <div className={styles.reward}>
            <img src="/assets/mobileAward/mobile-news2.png" />
            <div>전자신문 온라인기사</div>
          </div>
          <div className={styles.reward}>
            <img src="/assets/mobileAward/mobile-reward1.jpg" />
            <div>상패</div>
          </div>
        </div>
        <div className={styles.rewardWrapper}>
          <div className={styles.reward}>
            <img src="/assets/mobileAward/mobile-reward3.jpg" />
            <div>수상 인증팝업</div>
          </div>
          <div className={styles.reward}>
            <div className={styles.emblem}>
              <img src="/assets/mobileAward/mobile-reward2.png" />
              <img src="/assets/mobileAward/mobile-reward4.png" />
            </div>
            <div>수상 엠블럼</div>
          </div>
        </div>
      </>
    );
  }
}

export default RewardDetail;
