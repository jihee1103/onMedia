import React from "react";
import styles from "./Intro.module.scss";

function Intro({ type }) {
  const introTexts = {
    digital: (
      <>
        디지털 기술의 활용으로
        <br />
        독창적이고 혁신적인 결과를 도출한 우수 브랜드를 선정
      </>
    ),
    mobile: (
      <>
        모바일 기술의 혁신과
        <br />
        사용자 경험을 선도하는 우수 브랜드 선정
      </>
    ),
    appliance: <>소비자 만족 1위의 대한민국 대표 가전브랜드</>,
  };

  return (
    <div className={styles.intro}>
      <h3>{introTexts[type]}</h3>
    </div>
  );
}

export default Intro;
