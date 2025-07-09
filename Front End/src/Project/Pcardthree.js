import React from "react";
import "./Pcard.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { SiApplearcade } from "react-icons/si";
const cardData = [
  {
    title: "Yandere Simulator",
    text: "Step into the shoes of a high school girl obsessed with her crush. Use stealth, strategy, and sometimes sinister tactics to eliminate rivals—without getting caught. A unique blend of dark humor, simulation, and suspense.",
    img: "https://e1.pxfuel.com/desktop-wallpaper/659/356/desktop-wallpaper-yandere-simulator-rivals-yandere-simulator.jpg"
  },
  {
    title: "Minecraft",
    text: "Explore infinite worlds made of blocks, craft tools, build structures, and survive against creatures in this endlessly creative sandbox. Play solo or with friends in a game that lets your imagination run wild.",
    img: "https://th.bing.com/th/id/OIP.i0Zioc-_0o0gYfounwku-QHaEo?r=0&cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    title: "Subnautica",
    text: "Dive into an alien underwater world filled with beauty and danger. Gather resources, build bases, and survive the mysteries lurking beneath the waves in this thrilling open-world survival adventure.",
    img: "https://th.bing.com/th/id/OIP.iE6chCUFXHNdr5q1r9rHBAHaEK?r=0&cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    title: "The Elder Scrolls V:Skyrim",
    text: "Enter the vast, snowy province of Skyrim to shape your destiny as the Dragonborn. Explore an epic open world filled with dragons, magic, and countless quests. Your choices shape the fate of Tamriel in this legendary RPG.",
    img: "https://wallpapercave.com/wp/wp2225905.jpg"
  },
  {
    title: "Sleeping Dogs",
    text: "Dive into the gritty underworld of Hong Kong as an undercover cop balancing crime and justice. Experience high-octane hand-to-hand combat, thrilling car chases, and a gripping story in this open-world action-adventure.",
    img: "https://wallpapercave.com/wp/wp2389090.jpg"
  },
];

function Cardthree() {
  return (
    <>
    <section id="topgap">
          <h1 id='cardthree'><SiApplearcade />  Sand-box</h1>
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

export default Cardthree;