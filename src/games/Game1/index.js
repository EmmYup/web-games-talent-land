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
    <div className="flex flex-col w-full items-center justify-center h-screen font-gameboy bg-gray-900 text-pacman-yellow">
      <p>Score: {localGame1Score}</p>
      <p>Click on the bunny</p>
      <Stage options={OPTIONS}>
        <RotatingBunny x={width / 2} y={height / 2} {...props} />
      </Stage>
      <div>
        <button
          className="bg-green-500 text-white p-1 my-4 rounded w-40 self-center font-gameboy"
          onClick={onFinishGame}>
          Finalizar juego
        </button>
      </div>
    </div>
  );
};

export default connect(selectors.propsSelector, dispatcher)(Game1);
