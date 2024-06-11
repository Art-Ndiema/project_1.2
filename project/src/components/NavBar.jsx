import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import coffee from '../assets/images/coffee image1.svg';
import navIcon1 from '../assets/images/nav-icon1.svg'
import navIcon2 from '../assets/images/nav-icon2.png'
import navIcon3 from '../assets/images/nav-icon3.svg'


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={coffee} alt="coffee image"/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
            onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about"lassName={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} 
            onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#contact"lassName={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} 
            onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>

          </Nav>
          <span className='navbar-text'>
            <div className='socialmedia-icon'>
              <a href='#'> <img src={navIcon1} alt=''/></a>
              <a href='#'> <img src={navIcon2} alt=''/></a>
              <a href='#'> <img src={navIcon3} alt=''/></a>
            </div>
            <button className='ze-button' onClick={
              ()=> console.log('connect')}> 
              <span>Let’s Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};