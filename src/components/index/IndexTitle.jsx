import React from "react";
import styles from "./indexTitle.module.scss";

function IndexTitle({ children, type }) {
  // type에 따라 다른 스타일 적용 (digital, mobile, 또는 appliance)
  let indexClassName;

  if (type === "digital") {
    indexClassName = styles.indexDigital;
  } else if (type === "appliance") {
    indexClassName = styles.indexAppliance;
  } else {
    indexClassName = styles.indexMobile;
  }

  return <div className={indexClassName}>{children}</div>;
}

export default IndexTitle;
