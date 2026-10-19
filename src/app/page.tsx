import { Container } from 'react-bootstrap';
import NGHome from '@/components/NGHomePage';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-3">
      <NGHome />
    </Container>
  </main>
);

export default Home;
