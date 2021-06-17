import { Stage } from 'react-pixi-fiber';
import RotatingBunny from '../../components/RotatingBunny';

const Game1 = () => {
  const height = 450;
  const width = 600;
  const OPTIONS = {
    backgroundColor: 0x1099bb,
    height: height,
    width: width,
  };
  return (
    <Stage options={OPTIONS}>
      <RotatingBunny x={width / 2} y={height / 2} />
    </Stage>
  );
};

export default Game1;
