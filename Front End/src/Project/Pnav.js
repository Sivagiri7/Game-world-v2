
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./Pnav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import gamelogo from "./image/gamelogo.png";
import { useNavigate } from 'react-router-dom';


function Nbar() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" id='nav' sticky='top'>
        <Container>
          <Navbar.Brand href="#hom" id='title'>
            <img src={gamelogo} className="logo-img" alt="Logo" />{' '}
            Game World
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#slidename">Home</Nav.Link>
              <Nav.Link href="#newstitle">News</Nav.Link>
              <NavDropdown data-bs-theme="dark" title="Games" id="basic-nav-dropdown">
                <NavDropdown.Item href="#card" className='dropdowns'>Story Games</NavDropdown.Item>
                <NavDropdown.Item href="#cardtwo" className='dropdowns'>Co-op</NavDropdown.Item>
                <NavDropdown.Item href="#cardthree" className='dropdowns'>Sand-box</NavDropdown.Item>
                <NavDropdown.Item href="#cardfour" className='dropdowns'>Free to play</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link id="icon" onClick={() => navigate('/')}> Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nbar;
