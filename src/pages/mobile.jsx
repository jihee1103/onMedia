import mobilePage1 from "/src/assets/mobileAward/1.png";
import mobilePage2 from "/src/assets/mobileAward/2.png";
import mobilePage3 from "/src/assets/mobileAward/3.png";
import mobilePage4 from "/src/assets/mobileAward/4.png";
import mobilePage5 from "/src/assets/mobileAward/5.png";
import "./mobile.css";

function Mobile() {
  return (
    <>
      <div class="mobileAward">
        <img src={mobilePage1} className="page" alt="모바일대상" />
        <img src={mobilePage2} className="page" alt="모바일대상" />
        <img src={mobilePage3} className="page" alt="모바일대상" />
        <img src={mobilePage4} className="page" alt="모바일대상" />
        <img src={mobilePage5} className="page" alt="모바일대상" />
      </div>
    </>
  );
}

export default Mobile;
