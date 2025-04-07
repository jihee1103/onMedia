import mobilePage1 from "/src/assets/mobileAward/1.png";
import "./mobile.css";
import {
  EtnewsLogo,
  IndustryLogo,
  MinistryLogo,
  ScienceLogo,
} from "../components/logo";

function Mobile() {
  return (
    <div className="pageWrapper">
      <img src={mobilePage1} className="mainImage" alt="모바일대상" />
      <div className="mobileAward">
        <div className="summary">
          <div>
            <div className="index-mobile">주최 및 후원</div>
            <div className="logo">
              <EtnewsLogo />
              <IndustryLogo />
              <ScienceLogo />
              <MinistryLogo />
            </div>
          </div>
        </div>

        <div className="intro">
          <h3>
            모바일서비스의 다양한 분야에서 혁신적이고
            <br />
            사용자 친화적인 서비스를 선정합니다.
          </h3>
        </div>
        <div className="summary">
          <div className="schedule">
            <div className="index-mobile">일정</div>
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
            <div className="index-mobile">평가 개요</div>
            <div className="list">
              <ul>
                <li>공개된 시장조사 데이터를 통한 분야별 선별조사</li>
                <li>후보 기업 및 서비스 사전 선별</li>
                <li>
                  선별된 기업 및 서비스 대상으로 품질 및 소비자 평가 유관기관
                  <br />
                  공개 데이터를 통해 소비자 피해 사례 및 관련 기준 검토 후
                  필터링
                </li>
              </ul>
            </div>
            <div>
              <table className="mobileTable">
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

          <div>
            <div className="index-mobile">시상부문</div>
            <div className="text">
              <table class="service-table">
                <tbody>
                  <tr>
                    <th>금융</th>
                    <td>
                      모바일뱅킹, 카드 및 결제, 자산관리, 투자정보서비스 등
                    </td>
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
          <div>
            <div className="index-mobile">홍보특전</div>
            <div className="text">
              <h4>전자신문 지면기사 및 온라인기사</h4>
              <div className="reward">
                <img src="/src/assets/mobileAward/mobile-news1.jpg" />
                <img src="/src/assets/mobileAward/mobile-news2.png" />
              </div>
              <h4>상패, 인증팝업 및 엠블럼(1년간 사용)</h4>
              <div className="rewards-badge">
                <img src="/src/assets/mobileAward/mobile-reward1.jpg" />
                <img src="/src/assets/mobileAward/mobile-reward2.png" />
              </div>
              <div className="rewards-badge">
                <img src="/src/assets/mobileAward/mobile-reward3.jpg" />
                <img src="/src/assets/mobileAward/mobile-reward4.png" />
              </div>
            </div>
          </div>

          <div className="awarded">
            <div className="index-mobile">2024 수상사</div>
            <div className="awardedCompany">
              <img src="/src/assets/mobileAward/2024kmsa-awarded.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
