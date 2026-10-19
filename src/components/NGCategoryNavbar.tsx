import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container, Navbar, NavLink } from "react-bootstrap";

const CategoryMenu = () => (
  <Container fluid className="d-flex justify-content-center p-0" style={{backgroundColor: '#000000', height: '36px'}}>
    <Navbar id="TopMenu" className="justify-content-center p-0 h-100">
      <Container className="d-flex justify-content-center align-items-center text-nowrap">
        <NavLink className="custom-link" style={{borderBottomColor: 'red'}}>Movies</NavLink>
        <NavLink className="custom-link" style={{borderBottomColor: '#047ff9'}}>Games</NavLink>
        <NavLink className="custom-link" style={{borderBottomColor: '#00c54b'}}>Audio</NavLink>
        <NavLink className="custom-link" style={{borderBottomColor: '#ff09ca'}}>Art</NavLink>
        <NavLink className="custom-link" style={{borderBottomColor: '#b000fc'}}>Portal</NavLink>
        <NavLink className="custom-link" style={{borderBottomColor: '#ff7700'}}>Community</NavLink>
        <NavLink className="custom-link" style={{borderBottomColor: '#fffb00'}}>Your Feed</NavLink>
      </Container>
    </Navbar>
  </Container>
);

export default CategoryMenu;
