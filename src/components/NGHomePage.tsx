import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container } from "react-bootstrap";
import TopNavMenu from "./NGTopMenu";
import CategoryMenu from "./NGCategoryNavbar";
import MiddleSection from "./NGContentSection";

export default function NGHome() {
  return (
    <main>
      <Container fluid>
        <TopNavMenu />
        <CategoryMenu />
        <MiddleSection />
      </Container>
    </main>
  );
}