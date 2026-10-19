import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container, Button, Row, Col, NavLink } from "react-bootstrap";

const SupportBanner = () => (
  <Container>
    <Container id="supportnotif" className="mx-auto">
      <Row className="justify-content-center" style={{color: "#a7a7a7"}}>
            <Col style={{marginLeft: "100px"}}>
                <p style={{color:"#a1a0a0", fontSize: "18px"}}>
                    <NavLink href="#" className="orange-link" style={{color:"rgb(255, 136, 0)"}}>User</NavLink> just joined the crew!
                </p>
                <p style={{color:"#a1a0a0"}}>
                    We need you on the team, too.
                    Support Newgrounds and get tons of perks!
                </p>
            </Col>
            <Col>
                
            </Col>
            <Col>
                <p style={{color:'#a1a0a0'}}>
                    <NavLink href="#" className="orange-link" style={{color:"rgb(255, 136, 0)"}}>Create a Free Account</NavLink> and then..</p>
                
                <Button id="supportersignup-btn" className="btn-sm rounded-3">
                <b>Become a Supporter!</b>
                </Button>
            </Col>
        </Row>
    </Container>    
  </Container>
);

export default SupportBanner;
