import { useCallback, useState } from 'react';
import { usePixiTicker } from 'react-pixi-fiber';
import Bunny from '../../sprites/bunny';
import Logo from '../../sprites/logo';

const RotatingSprite = ({
  onPointerDown,
  scale = 1,
  counter = 0,
  ...props
}) => {
  const [rotation, setRotation] = useState(0);
  const animate = useCallback(delta => {
    setRotation(rotation => rotation + 0.1 * delta);
  }, []);
  usePixiTicker(animate);

  return counter >= 5 ? (
    <Logo buttonMode interactive scale={[0.5]} {...props} />
  ) : (
    <Bunny
      buttonMode
      interactive
      rotation={rotation}
      pointerdown={onPointerDown}
      scale={[scale]}
      {...props}
    />
  );
};

export default RotatingSprite;
