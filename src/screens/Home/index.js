import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectors from '../../store/selectors/app';

const Home = props => {
  const { globalScore } = props;
  const examples = ['example-1', 'example-2', 'example-3'];
  return (
    <Container>
      <Container>
        <p>
          <strong>Score global:</strong> {globalScore}
        </p>
      </Container>
      <ListGroup>
        {examples.map((example, index) => (
          <ListGroup.Item key={`game${index + 1}Score`}>
            <Link to={example}>{`Example ${index + 1}`}</Link>
            <p>
              <strong>Último puntaje:</strong>{' '}
              {props[`lastGame${index + 1}Score`]}
            </p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default connect(selectors.propsSelector, null)(Home);
