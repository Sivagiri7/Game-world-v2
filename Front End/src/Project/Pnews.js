// import React, { useEffect } from "react";
// import AOS from "aos";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import "./Pnews.css";
// import { FaNewspaper } from "react-icons/fa";
// function News() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//     });
//   }, []);

//   return (
//     <>
//       <h1 id="newstitle">
//         <FaNewspaper /> News
//       </h1>
//       <br></br>
//       <Container>
//         <Row>
//           <Col data-aos="fade-right" sm={4} className="newsimg">
//             <img
//               src="https://wallpapercave.com/wp/wp8198344.jpg"
//               height={"95%"}
//               width={"100%"}
//             ></img>
//           </Col>
//           <Col
//             data-aos="fade-left"
//             className="news"
//             sm={8}
          
//           >
//             <h1>Good News Soldiers!</h1>
//             <h4 id="newstexttwo">
//               We launched Our Brand New <span>Game World App</span> for
//               moblies.The Game World Store for Android/ios is a new mobile
//               marketplace where you can find, purchase, download and play new
//               games and apps for your mobile device.
//             </h4>
//             <h4 id="newstexttwo">
//               Launching initially with your favorite mobile games from Game
//               World, the app will evolve over the coming months to become a
//               hybrid games store featuring PC, Mac and mobile products in one
//               store.App available in Both Play Store and App Store
//             </h4>
//             <p>
//               {" "}
//               <img
//                 src="https://www.pngall.com/wp-content/uploads/10/Google-Play-PNG-Clipart.png"
//                 height={"35%"}
//                 width={"35%"}
//                 className="imgstyle"
//               ></img>
//               <img
//                 src="https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png"
//                 height={"50%"}
//                 width={"50%"}
//                 className="imgstyle"
//               ></img>
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }
// export default News;

import React,{ useEffect }from "react";
import AOS from 'aos';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Pnews.css";
import { FaNewspaper } from "react-icons/fa";
function News(){
    return(
        <>
        <hr id="line"></hr>
        <h1 id="newstitle"><FaNewspaper />  News</h1><br></br>
        <Container>
      <Row>
        <Col data-aos="fade-right" sm={4} className="newsimg"><img src="https://wallpapercave.com/wp/wp8198344.jpg" height={'95%'} width={'100%'}></img></Col>
        <Col data-aos="fade-left" className="news" sm={8}><h1 id="sectitle">Good News Soldiers!</h1>
        <h4 id="newstexttwo">We launched Our Brand New <span>Game World App</span> for moblies.The Game World Store for Android/ios is a new mobile marketplace where you can find, purchase, download and play new games and apps for your mobile device.</h4>
        <h4 id="newstexttwo">Launching initially with your favorite mobile games from Game World, the app will evolve over the coming months to become a hybrid games store featuring PC, Mac and mobile products in one store.App available in Both Play Store and App Store.</h4>
        <p > <img src="https://www.pngall.com/wp-content/uploads/10/Google-Play-PNG-Clipart.png" height={"35%"} width={'35%'} className="imgstyle"></img>
         <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png"  height={"50%"} width={'50%'} className="imgstyle"></img></p></Col>
     
      </Row> 
      </Container>
      </>
    )
};
export default News;

