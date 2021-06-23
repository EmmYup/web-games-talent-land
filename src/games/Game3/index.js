import { Stage } from 'react-pixi-fiber';
import GameBoard from '../../components/GameBoard';

const Game3 = () => {
  const height = 645;
  const width = 485;
  const OPTIONS = {
    backgroundColor: 0x000000,
  };
  return (
    <Stage options={OPTIONS} width={width} height={height}>
      <GameBoard x={width / 2} y={height / 2} />
    </Stage>
  );
};

export default Game3;
