"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container, NavLink, Row, Col } from "react-bootstrap";
import SupportBanner from "@/components/NGPatronNotifcation";


const eventsData: string[][] = [
    ['Oct 01-Oct 31', ' Evil Doer Inktober Prompts'],
    ['Oct 01-Oct 31', ' Analogtober Audio Challenge'],
    ['Oct 20', ' PS2 Collab Deadline'],
    ['Oct 28', ' Ruby Gloom Art Collab Deadline'],
    ['Oct 29', ' Creepypasta art Collab Deadline'],
    ['Oct 30', ' Scareware Collab Deadline'],
    ['Oct 30', ' Slasher Collab Deadline'],
    ['Oct 30', ' Uncle Parks Halloween Grab Bag Ends'],
    ['Oct 30', ' Writing Partner Jam Begins'],
    ['Oct 30', ' Sppok It Up Art Collab Deadline'],
    ['Oct 31', ' Eldritch Collab Deadline'],
    ['Oct 31', ' Outsider House Mix Deadline'],
    ['Oct 31', ' Halloween Spooktacular Deadline']
]


function GenerateEventsList(data: string[][]) {
  const list = [];
  for (let i = 0; i < data.length; i++) {
    list.push(
        <NavLink key={i}
          className="nav-link text-white d-flex align-items-center px-4 transition-all" 
          href="#"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            transition: 'background-color 0.2s ease',
            padding: 1, margin: 2,
            fontSize: 12,
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
          >
          {data[i][0]} <span style={{color: '#ff8000'}}> - {data[i][1]}</span>
        </NavLink>
    )
  }
  list.push(
        <NavLink key={'more events'}
          className="nav-link text-white d-flex align-items-center px-4 transition-all justify-content-center" 
          href="#"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            transition: 'background-color 0.2s ease',
            padding: 12, margin: 6,
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
          >
          More Events
        </NavLink>
    )
  return (
    list
  );
}

const MiddleSection = () => (
  <Container fluid className="img-background">
    <SupportBanner />
    <Container id="content_section" className="mx-auto">
      <Row>
        <Col className="left-col">
          <Container className="custom-block rounded-1 border border-2">
            <Row className="block-header">
                <h5>Upcoming Events</h5>
                <ul>
                  {GenerateEventsList(eventsData)}
                </ul>
            </Row>

          </Container>
        </Col>
        <Col className="right-col">
          <Container className="custom-block rounded-1 border border-2">
            <img src="event_banner.webp"
            alt="Promotional Event Banner"
            className="img-fluid"
            style={{ padding: 10}}></img>
          </Container>
        </Col>
      </Row>

    </Container>
  </Container>
);

export default MiddleSection;
