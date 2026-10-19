import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container, Navbar, Row, Col, NavLink, InputGroup, Form, Nav, Button, Image } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const DarkPillSearchBar = () => {
  return (
    <Nav className="justify-content-center">
        <Container className="w-100 justify-content-center">
            
            <InputGroup id="search-bar" className="input-group input-group-sm rounded-pill">
                <Form.Control type="search" className="form-control form-control-sm rounded-start-pill bg-transparent border-0 custom-search" 
                    placeholder="Search Newgrounds..." 
                />
                <Button className="btn btn-secondary btn-sm rounded-end-pill bg-transparent border-0 " 
                    type="submit">
                    <Search style={{color: '#232525'}}/>
                </Button>
            </InputGroup>
            
        </Container>
    </Nav>
  );
};

const TopNavMenu = () => (
  <Navbar className="justify-content-center">
    <Row id="TopMenu" className="justify-content-center">
      <Col className="justify-content-start">
        <NavLink>
          <Image src="/newgrounds-seeklogo.png" height="45px"/>
        </NavLink>
      </Col>
      <Col>
        <Form>
          <DarkPillSearchBar />
        </Form>
      </Col>
      <Col className="justify-content-end d-flex align-items-center text-nowrap"
        style={{fontSize: '18pt'}}>
        <NavLink className="orange-link">Login</NavLink>
        <span className="mx-1 text-white">/</span>
        <NavLink className="orange-link">Sign Up</NavLink>
      </Col>
    </Row>
  </Navbar>
);

export default TopNavMenu;