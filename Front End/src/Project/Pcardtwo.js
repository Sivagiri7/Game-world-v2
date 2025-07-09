import React from "react";
import "./Pcard.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaUserFriends } from "react-icons/fa";
const cardData = [
  {
    title: "R.E.P.O.",
    text: "Team up in this 6-player co-op horror game to retrieve valuable items from procedurally generated facilities. Handle objects with care, avoid lurking monsters, and race against time to extract and profit.",
    img: "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/r-e-p-o-file-207303896c.jpg.webp"
  },
  {
    title: "Chained Together",
    text: "Escape the depths of hell in this chaotic co-op platformer. Chained to up to three friends, every jump demands perfect coordination. Navigate treacherous climbs, dodge rising lava, and test your teamwork in a game where one misstep can drag everyone down.",
    img: "https://actustream.fr/img/Chained-Together.jpg"
  },
  {
    title: "Farming Simulator 22",
    text: "Live the farming life with deep realism and freedom. Grow crops, manage livestock, and expand your land using authentic machinery from real-world brands. Whether solo or in multiplayer, cultivate your path to success across dynamic seasons and landscapes.",
    img: "https://cdn1.epicgames.com/offer/308cbcb523ad4937a8c509d10e9b688a/EGS_FarmingSimulator22PremiumEdition_GIANTSSoftwareGmbH_Editions_S1_2560x1440-9e362fc2fc462e6fe8a0534624f03139"
  },
  {
    title: "Lethal Company",
    text: "Scavenge abandoned moons with your crew in this co-op horror survival game. Collect scrap for profit while avoiding terrifying creatures, malfunctioning tech, and eerie environments. Communication and caution are key—one wrong move could cost the whole team.",
    img: "https://th.bing.com/th/id/OIP.0lQyb_6Aa9rk05ykoQELcwHaEK?r=0&cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    title: "It Takes Two",
    text: "Embark on a heartfelt and wildly inventive co-op adventure as a couple turned into dolls. Solve puzzles, conquer challenges, and explore a magical world built around teamwork. Only together can you fix what's broken.",
    img: "https://wallpaperaccess.com/full/5870841.jpg"
  },
];

function Cardtwo() {
  return (
    <>
    <section id="topgap">
          <h1 id='cardtwo' className="co-op"><FaUserFriends /> Co-op</h1>
    <div className="scroll-container">
      {cardData.map((card, index) => (
        <Card key={index} className="scroll-card" id="scroll-card" bg="dark" data-bs-theme="dark">
          <Card.Img variant="top" src={card.img} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </section>
    </>
  );
}

export default Cardtwo;