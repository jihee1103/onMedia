import digitalPage1 from "/src/assets/digitalAward/1.png";
import "./k-digital.css";
import {
  EtnewsLogo,
  IndustryLogo,
  MinistryLogo,
  ScienceLogo,
} from "../components/logo";

function Kdigital() {
  return (
    <div className="pageWrapper">
      <img src={digitalPage1} className="mainImage" alt="디지털대상" />
      <div className="digitalAward">
        <div className="summary">
          <div>
            <div className="index">주최 및 후원</div>
            <div className="logo">
              <EtnewsLogo />
              <ScienceLogo />
              <MinistryLogo />
            </div>
          </div>
        </div>

        <div className="intro">
          <h3>
            디지털 기술의 활용으로
            <br />
            독창적이고 혁신적인 결과를 도출한 우수 브랜드를 선정
          </h3>
        </div>
        <div className="summary">
          <div className="schedule">
            <div className="index">일정</div>
            <div className="text">
              <h4>접수기간</h4>
              <p>
                2025년 04월 01일 ~ 2025년 04월 30일
                <br />※ 부문별 마감 기한 상이
              </p>
              <h4>전문가 평가 및 최종 심의</h4>
              <p>2025년 04월 30일</p>
              <h4>선정 발표</h4>
              <p>2025년 05월 29일 (목)</p>
            </div>
          </div>

          <div>
            <div className="index">평가 개요</div>
            <div className="list">
              <p>
                <ul className="digital-ul">
                  <li>
                    유관기관 공개 데이터 및 언론 보도를 활용하여 디지털 기술
                    관련 산업동향 조사
                  </li>
                  <li>
                    디지털 산업 내 창의적이고 혁신적인 기술 및 브랜드 조사
                  </li>
                  <li>
                    부문별 대표 업종 별 시장 점유율 조사 (공개된 자료 사용)
                  </li>
                  <li>
                    선별된 브랜드의 소비자 만족도, 소비자 피해 사례 및 관련 기준
                    검토 후 필터
                  </li>
                  <li>
                    디지털 기술 개발 및 기술의 활용의 창의성과 혁신성 조사
                  </li>
                  <li>선별된 브랜드 별 평가 지표에 따른 최종 평가</li>
                </ul>
              </p>
              <table class="evaluation-table">
                <thead>
                  <tr>
                    <th colspan="4">평가항목</th>
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
          <div>
            <div className="index">홍보특전</div>
            <div className="text">
              <h4>전자신문 지면기사 및 온라인기사</h4>
              <div className="reward">
                <img src="/src/assets/digitalAward/digital-news1.jpg" />
                <img src="/src/assets/digitalAward/digital-news2.png" />
              </div>
              <h4>상패, 인증팝업 및 엠블럼(1년간 사용)</h4>
              <div className="rewards-badge">
                <img src="/src/assets/digitalAward/digital-reward1.jpg" />
                <img src="/src/assets/digitalAward/digital-reward3.png" />
                <img src="/src/assets/digitalAward/digital-reward2.png" />
              </div>
            </div>
          </div>

          <div className="awarded">
            <div className="index">2024 수상사</div>
            <div className="awardedCompany">
              <img src="/src/assets/digitalAward/digital-2024awarded.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kdigital;
