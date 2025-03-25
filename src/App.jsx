import "./App.css";
import mobilePage1 from "/src/assets/mobileAward/1.png";
import digitalPage1 from "/src/assets/digitalAward/1.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/mobile">
        <img src={mobilePage1} className="page" alt="모바일대상" />
        <img src={digitalPage1} className="page" alt="디지털대상" />
      </Link>
    </>
  );
}

export default App;
