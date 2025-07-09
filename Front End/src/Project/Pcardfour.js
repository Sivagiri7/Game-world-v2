import React from "react";
import "./Pcard.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdOutlineMoneyOff } from "react-icons/md";
const cardData = [
  {
    title: "Amoung Us",
    text: "Join your crewmates in a space-themed party game where teamwork meets deception. Complete tasks while hunting for the impostor trying to sabotage your mission—trust no one and expose the liar!.",
    img: "https://wallpapercave.com/wp/wp8049967.jpg"
  },
  {
    title: "Super Sus",
    text: "Jump into frantic battles and stealthy plays in this action-packed social deduction game. Outsmart your foes, complete tasks, and survive as either a crewmate or an impostor in chaotic spaceship showdowns.",
    img: "https://th.bing.com/th/id/OIP.cPRI98gldduqRffHGya6SQHaEK?r=0&cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    title: "Fortnite",
    text: "Drop into a vibrant battle royale where building skills and quick reflexes mean survival. Team up, gather resources, and outlast opponents in a constantly evolving world packed with events and challenges.",
    img: "https://wallpaperaccess.com/full/1526300.jpg"
  },
  {
    title: "Sims 4",
    text: "Shape unique stories by controlling every detail of your Sims’ lives. Build, customize, and live out endless possibilities in this dynamic life simulation game.Design lives, homes, and stories in the ultimate life simulation.",
    img: "https://th.bing.com/th/id/OIP.qfD4IvxH6SwVB427W2YcXQHaEK?r=0&cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    title: "Genshin Impact",
    text: "Explore a breathtaking open world filled with elemental magic, legendary heroes, and epic quests. Gather a team, master unique powers, and uncover the secrets of Teyvat in this action RPG adventure.",
    img: "https://images.hdqwalls.com/wallpapers/genshin-impact-4k-5c.jpg"
  },
];

function Cardfour(){
  return (
    <>
    <section id="topgap">
          <h1 id='cardfour'><MdOutlineMoneyOff />  Free To Play</h1>
    <div className="scroll-container">
      {cardData.map((card, index) => (
        <Card key={index} className="scroll-card" id="scroll-card" bg="dark" data-bs-theme="dark">
          <Card.Img variant="top" src={card.img} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Button variant="primary">Play Now</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </section>
    </>
  );
}

export default Cardfour;