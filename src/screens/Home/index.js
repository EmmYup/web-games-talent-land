import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const examples = ['example-1', 'example-2', 'example-3'];
  return (
    <Container>
      <ListGroup>
        {examples.map((example, index) => (
          <ListGroup.Item>
            <Link to={example}>{`Example ${index + 1}`}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Home;
