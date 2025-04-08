import IndexTitle from "../index/Index";
import styles from "./evaluation.module.scss";

function Evaluation({ type }) {
  // type 파라미터를 사용하여 조건부 렌더링
  if (type === "digital") {
    return (
      <div>
        <IndexTitle type={"digital"}>평가 개요</IndexTitle>
        <div className={styles.list}>
          <p>
            <ul className={styles.digitalUl}>
              <li>
                유관기관 공개 데이터 및 언론 보도를 활용하여 디지털 기술 관련
                산업동향 조사
              </li>
              <li>디지털 산업 내 창의적이고 혁신적인 기술 및 브랜드 조사</li>
              <li>부문별 대표 업종 별 시장 점유율 조사 (공개된 자료 사용)</li>
              <li>
                선별된 브랜드의 소비자 만족도, 소비자 피해 사례 및 관련 기준
                검토 후 필터
              </li>
              <li>디지털 기술 개발 및 기술의 활용의 창의성과 혁신성 조사</li>
              <li>선별된 브랜드 별 평가 지표에 따른 최종 평가</li>
            </ul>
          </p>
          <table className={styles.evaluationTable}>
            <thead>
              <tr>
                <th colSpan="4">평가항목</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>브랜드전략</td>
                <td>혁신성</td>
                <td>브랜드 만족도</td>
                <td>공익성</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (type === "mobile") {
    return (
      <div>
        <IndexTitle type={"mobile"}>평가 개요</IndexTitle>
        <div>
          <ul className={styles.digitalUl}>
            <li>공개된 시장조사 데이터를 통한 분야별 선별조사</li>
            <li>후보 기업 및 서비스 사전 선별</li>
            <li>
              선별된 기업 및 서비스 대상으로 품질 및 소비자 평가 유관기관
              <br />
              공개 데이터를 통해 소비자 피해 사례 및 관련 기준 검토 후 필터링
            </li>
          </ul>
        </div>
        <div>
          <table className={styles.mobileTable}>
            <tr>
              <th>기업경영</th>
              <td>
                <ul>
                  <li>경영 방침 / 전략 및 비전</li>
                  <li>최고경영자의 소신 및 의도</li>
                  <li>기업의 건정성 및 사회적 책임 완수</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>혁신성</th>
              <td>
                <ul>
                  <li>기술의 혁신성</li>
                  <li>서비스의 차별성</li>
                  <li>마케팅의 독창성</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>안전성</th>
              <td>
                <ul>
                  <li>개인정보 보호장치</li>
                  <li>보안기준 준수</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>만족도</th>
              <td>
                <ul>
                  <li>소비자 만족도&서비스</li>
                  <li>소비자와의 커뮤니케이션</li>
                  <li>디자인</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  } else if (type === "appliance") {
    return (
      <div>
        <IndexTitle type={"appliance"}>평가 개요</IndexTitle>
        <ul className={styles.digitalUl}>
          <li>
            시장조사 및 유관기관 공개 데이터 및 언론 보도를 활용한 후보 제품
            사전
          </li>
          <li>선별 공개된 시장조사 데이터를 통한 분야별 선별조사</li>
          <li>
            평가기준 - 소비자만족, 혁신성, 안정성, 편리성, 디자인, 소비자와의
            소통
          </li>
        </ul>
      </div>
    );
  }
}

export default Evaluation;
