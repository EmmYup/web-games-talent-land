import { Container, Button } from 'react-bootstrap';
import { Stage } from 'react-pixi-fiber';
import { useHistory } from 'react-router-dom';
import RotatingBunny from '../../components/RotatingBunny';
import { connect } from 'react-redux';
import dispatcher from '../../store/dispatchers/game1';
import selectors from '../../store/selectors/game1';

const Game1 = props => {
  const history = useHistory();
  const height = 450;
  const width = 600;
  const OPTIONS = {
    backgroundColor: 0x1099bb,
    height: height,
    width: width,
  };
  const {
    globalScore,
    onSetGlobalScore,
    onResetScore,
    localGame1Score,
    onSetLastScore,
  } = props;

  const onFinishGame = () => {
    onSetGlobalScore(localGame1Score + globalScore);
    onSetLastScore(localGame1Score);
    onResetScore();
    history.push('/');
  };

  return (
    <div>
      <p>Score: {localGame1Score}</p>
      <Stage options={OPTIONS}>
        <RotatingBunny x={width / 2} y={height / 2} {...props} />
      </Stage>
      <Container>
        <Button variant="primary" onClick={onFinishGame}>
          Finalizar juego
        </Button>
      </Container>
    </div>
  );
};

export default connect(selectors.propsSelector, dispatcher)(Game1);
