import react from "react";
import Nbar from "./Pnav";
import Slide from "./Pslide";
import Cardone from "./Pcardone";
import Cardtwo from "./Pcardtwo";
import Cardthree from "./Pcardthree";
import Cardfour from "./Pcardfour";
import News from "./Pnews";
import Footer from "./Pfooter";
import Pform from "./Pform";
import "./main.css";
function Main() {
  return (
    <>
      <div className="bcolor">
        <Nbar />
        <Slide />
        <News />
        <Cardone />
        <Cardtwo />
        <Cardthree />
        <Cardfour />
        <Pform />
        <Footer />
      </div>
    </>
  );
}
export default Main;
