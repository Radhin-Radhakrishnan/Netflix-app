import { Navbar, Container, Nav,} from 'react-bootstrap';
import img2 from '../../Images/Netflix_logo.png';
import img3 from '../../Images/netflix-avatar.jpg';
import { useNavigate } from 'react-router-dom';

export default function MainNavbar() {
  const navigateLogin = useNavigate();

  const handleOkClick = () => {
    navigateLogin('/Login'); 
  }
  const navigateLand = useNavigate();
  const handleMainClick = () => {
    navigateLand('/'); 
  }

  return (
    <Navbar expand="lg" className="navbar-main px-4" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={img2} onClick={handleMainClick} alt="NavLogo" className="Nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav-link me-auto my-5">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Tv Shows</Nav.Link>
            <Nav.Link href="#action3">Movies</Nav.Link>
            <Nav.Link href="#action4">Recently Added</Nav.Link>
            <Nav.Link href="#action5">My List</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            
              < img src={img3}  onClick={handleOkClick} alt="NavLogo" className="Nav-avatar px-4" />
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
