import IndexTitle from "../index/Index";
import styles from "./schedule.module.scss";

function Schedule({ type }) {
  // type 파라미터를 사용하여 조건부 렌더링
  if (type === "digital") {
    return (
      <div>
        <IndexTitle type={"digital"}>일정</IndexTitle>
        <ul className={styles.schedule}>
          <li>접수기간</li>
          <p>
            2025년 04월 01일 ~ 2025년 04월 30일
            <br />※ 부문별 마감 기한 상이
          </p>
          <li>전문가 평가 및 최종 심의</li>
          <p>2025년 04월 30일</p>
          <li>선정 발표</li>
          <p>2025년 05월 29일 (목)</p>
        </ul>
      </div>
    );
  } else if (type === "mobile") {
    return (
      <div>
        <IndexTitle type={"mobile"}>일정</IndexTitle>
        <ul className={styles.schedule}>
          <li>접수기간</li>
          <p>
            2025년 10월 10일 ~ 2025년 11월 14일
            <br />※ 부문별 마감 기한 상이
          </p>
          <li>전문가 평가 및 최종 심의</li>
          <p>2025년 11월 17일 (예정)</p>
          <li>선정 발표</li>
          <p>2025년 12월 04일 (목) (예정)</p>
        </ul>
      </div>
    );
  } else if (type === "appliance") {
    return (
      <div>
        <IndexTitle type={"appliance"}>일정</IndexTitle>
        <ul className={styles.schedule}>
          <li>접수기간</li>
          <p>
            2025년 2월 5일 ~ 2025년 3월 14일
            <br />※ 부문별 마감 기한 상이
          </p>
          <li>전문가 평가 및 최종 심의</li>
          <p>2025년 3월 14일</p>
          <li>선정 발표</li>
          <p>2025년 3월 27일 </p>
        </ul>
      </div>
    );
  }
}

export default Schedule;
