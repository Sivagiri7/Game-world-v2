import React from "react";
import { Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Parent(){
  return(
    <>
    <h1>Parent to child</h1>
    <Child
    Setup={{
      img:"https://www.pixelstalk.net/wp-content/uploads/2016/08/Terminator-HD-Wallpapers.jpg",
      h:300,
      w:500
    }}
    
    />
    <ParentTwo/>
    </>
  )
}
export default Parent;
function Child({Setup}){
  return(
    <>
    <Container fluid>
      <Row>
        <Col><Image
    src={Setup.img}
    height={Setup.h}
    width={Setup.w}
    /></Col>
      </Row>
    </Container>
    
    
    </>
  )

}
// parent to child passing
function ParentTwo(){
  return(
    <ChildTwo/>
  )
}
function ChildTwo(){
  const link="https://www.pixelstalk.net/wp-content/uploads/2016/08/Terminator-HD-Wallpapers.jpg"
  return(
    <>
    <h1>Child to parent</h1>
    <Container>
    <Row>
      <Col><Image
    src={link}
    height={400}
    width={600}
    /></Col>
    </Row>
  </Container>
  </>

  )
}
