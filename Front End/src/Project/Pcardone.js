import React from "react";
import "./Pcard.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBook } from "react-icons/fa";

const cardData = [
  {
    title: "Red Dead Redemption 2",
    text: "Step into the boots of outlaw Arthur Morgan in a vast, stunningly detailed open world. RDR2 delivers an epic tale of loyalty, survival, and the dying days of the Wild West, packed with immersive storytelling and unforgettable characters.",
    img: "https://th.bing.com/th/id/OIP.T-PWAuMZkbgcOYM8D4tvfAHaEK?r=0&cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    title: "Black Myth Wukong",
    text: "Embark on a mythic journey as the Destined One in this action-RPG inspired by the classic novel Journey to the West. With breathtaking visuals, intense combat, and legendary creatures, Black Myth: Wukong redefines the next-gen fantasy adventure.",
    img: "https://4kwallpapers.com/images/wallpapers/black-myth-wukong-1920x1080-17948.jpeg"
  },
  {
    title: "GTA V",
    text: "Dive into the sprawling city of Los Santos in this open-world blockbuster. Switch between three criminals as they pull off daring heists, clash with rivals, and cause mayhem in a world packed with freedom, chaos, and unforgettable moments.Live the high-stakes lives of three criminals in Los Santos — where crime, chaos, and opportunity rule the streets",
    img: "https://th.bing.com/th/id/OIP.6Su38Nf4zMtzHCu48WfYwAHaD5?r=0&cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    title: "Hitman",
    text: "Step into the shoes of Agent 47, a master assassin with deadly precision. Travel the globe to eliminate high-profile targets using stealth, strategy, and disguise in this intense and intelligent assassination sandbox.Become Agent 47 — a silent assassin who blends in, strikes smart, and always finishes the job.",
    img: "https://wallpapercave.com/wp/wp5996436.jpg"
  },
  {
    title: "Choo-Choo Charles",
    text: "Face your fears in this open-world horror game where a bloodthirsty spider-train stalks your every move. Upgrade your own train, explore eerie landscapes, and survive the nightmare of Choo-Choo Charles.",
    img: "https://th.bing.com/th/id/OIP.NdDQh_MisG8Tmj84PxUghAHaEK?r=0&cb=iwp2&rs=1&pid=ImgDetMain"
  },
];

function Cardone() {
  return (
    <>
    <section id="topgap">
      <hr id="line"></hr>
          <h1 id='card'><FaBook />  Story Games</h1>
    <div className="scroll-container" >
      {cardData.map((card, index) => (
        <Card key={index} className="scroll-card" id="scroll-card"  bg="dark" data-bs-theme="dark">
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

export default Cardone;
