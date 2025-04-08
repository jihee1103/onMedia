import styles from "./mobile.module.scss";
import HostLogo from "../components/hostLogo/HostLogo";
import Schedule from "../components/schedule/Schedule";
import IndexTitle from "../components/index/Index";
import Evaluation from "../components/evaluation/Evaluation";
import RewardDetail from "../components/rewardDetail/RewardDetail";
import Intro from "../components/intro/Intro";
import AwardedCompany from "../components/awardedCompany/AwardedCompany";
import MainImage from "../components/mainImage/MainImage";

function Mobile() {
  return (
    <>
      <MainImage type={"mobile"} />
      <div className={styles.pageWrapper}>
        <HostLogo type={"mobile"} />
      </div>
      <Intro type={"mobile"} />
      <div className={styles.pageWrapper}>
        <Schedule type={"mobile"} />

        <Evaluation type={"mobile"} />

        <div>
          <IndexTitle type={"mobile"}>시상부문</IndexTitle>
          <div className={styles.text}>
            <table className={styles.serviceTable}>
              <tbody>
                <tr>
                  <th>금융</th>
                  <td>모바일뱅킹, 카드 및 결제, 자산관리, 투자정보서비스 등</td>
                </tr>
                <tr>
                  <th>AI서비스</th>
                  <td>AI플랫폼, AI통신서비스, AI기술브랜드 등</td>
                </tr>
                <tr>
                  <th>의료・헬스케어</th>
                  <td>비대면 진료 앱, 시니어헬스케어 등 디지털 헬스케어</td>
                </tr>
                <tr>
                  <th>커머스</th>
                  <td>라이브쇼핑 앱 등의 모바일 커머스</td>
                </tr>
                <tr>
                  <th>구독서비스</th>
                  <td>OTT 및 스트리밍 플랫폼 등</td>
                </tr>
                <tr>
                  <th>교육</th>
                  <td>디지털 교육플랫폼, 지식공유 앱 등</td>
                </tr>
                <tr>
                  <th>공공서비스</th>
                  <td>공공기관 대국민 편의 앱</td>
                </tr>
                <tr>
                  <th>여행</th>
                  <td>여행 및 관광 앱 등</td>
                </tr>
                <tr>
                  <th>라이프・게임</th>
                  <td>취미 및 생활편의 앱, 모바일게임 등</td>
                </tr>
                <tr>
                  <th>모빌리티</th>
                  <td>전기차 충전 앱 등 모빌리티 관련 앱</td>
                </tr>
                <tr>
                  <th>기타</th>
                  <td>기타 모바일서비스</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <RewardDetail type={"mobile"} />
        <AwardedCompany type={"mobile"} />
      </div>
    </>
  );
}

export default Mobile;
