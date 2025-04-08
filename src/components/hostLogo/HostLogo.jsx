import React from "react";
import {
  EtnewsLogo,
  ScienceLogo,
  MinistryLogo,
  IndustryLogo,
} from "@/components/logo";
import styles from "./hostLogo.module.scss";
import IndexTitle from "../index/Index";

const HostLogo = ({ type }) => {
  // type에 따라 다른 로고 조합과 IndexTitle 타입 설정
  if (type === "digital") {
    return (
      <div className={styles.wrapper}>
        <IndexTitle type="digital">주최 및 후원</IndexTitle>
        <div className={styles.digitalLogo}>
          <EtnewsLogo />
          <ScienceLogo />
          <MinistryLogo />
        </div>
      </div>
    );
  } else if (type === "appliance") {
    return (
      <div className={styles.wrapper}>
        <IndexTitle type="appliance">주최 및 후원</IndexTitle>
        <div className={styles.logo}>
          <EtnewsLogo />
          <IndustryLogo />
          <ScienceLogo />
          <MinistryLogo />
        </div>
      </div>
    );
  } else {
    // mobile이나 다른 타입의 경우 모든 로고 표시
    return (
      <div className={styles.wrapper}>
        <IndexTitle type="mobile">주최 및 후원</IndexTitle>
        <div className={styles.logo}>
          <EtnewsLogo />
          <IndustryLogo />
          <ScienceLogo />
          <MinistryLogo />
        </div>
      </div>
    );
  }
};

export default HostLogo;
