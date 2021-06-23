import { useState } from 'react';
import { Stage } from 'react-pixi-fiber';
import RotatingSprite from '../../components/RotatingSprite';

const Game2 = () => {
  const height = 450;
  const width = 600;

  const [x, setX] = useState(width / 2);
  const [y, setY] = useState(height / 2);
  const [pressedCounter, setPressedCounter] = useState(0);
  const OPTIONS = {
    backgroundColor: 0x9910bb,
    height,
    width,
  };

  const onPointerDown = () => {
    setX(Math.floor(Math.random() * width));
    setY(Math.floor(Math.random() * height));
    setPressedCounter(pressedCounter + 1);
    if (pressedCounter >= 4) {
      setX(width / 2);
      setY(height / 2);
    }
  };

  const props = {
    onPointerDown,
    x,
    y,
    counter: pressedCounter,
  };

  return (
    <Stage options={OPTIONS}>
      <RotatingSprite {...props} />
    </Stage>
  );
};

export default Game2;
