import React from "react";
import "./Pfooter.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiInstagram } from "react-icons/ci";
import { FaReddit } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer(){
    return(
        <>
        <footer>
            
        <h1 id="footertitle">About Us</h1>
        <h2 id="footertext">Welcome to Game World – Your Ultimate Destination for Gaming!</h2>
        <h4 id="footertext">At Game World, we’re more than just a game store — we’re a community of passionate gamers dedicated to delivering the best in interactive entertainment. Whether you're a casual player or a hardcore enthusiast, we provide a curated selection of the latest and greatest titles across all platforms, including PC, PlayStation, Xbox, and Nintendo.</h4>
       <hr id="line"></hr>
     <Container>
      <Row>
        <Col id="footlink"><CiInstagram /> Instagram</Col>
        <Col id="footlink"><FaReddit /> Reddit</Col>
        <Col id="footlink"><FaFacebook /> Facebook</Col>
      </Row>
    </Container>
        <p id="copyright">© 2025, Game World, Inc. All rights reserved. Game World, the Game World logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Game World, Inc. in the India and elsewhere. Other brands or product names are the trademarks of their respective owners.</p>
        <p id="copyright"><span id="first">Terms of Services</span> <span id="second">Privacy Policy</span> <span id="third"> Safety & Security</span></p>
        </footer>
        </>
    )
};
export default Footer;