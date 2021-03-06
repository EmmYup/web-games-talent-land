import { useCallback, useState } from 'react';
import { usePixiTicker } from 'react-pixi-fiber';
import Bunny from '../../sprites/bunny';

function RotatingBunny(props) {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const { game1Score, onSetScore, localGame1Score, onSetLocalScore } = props;
  const animate = useCallback(delta => {
    setRotation(rotation => rotation + 0.1 * delta);
  }, []);
  usePixiTicker(animate);

  const handleClick = () => {
    setScale(scale => scale * 1.25);
    onSetScore(game1Score + 1);
    onSetLocalScore(localGame1Score + 1);
  };

  return (
    <Bunny
      buttonMode
      interactive
      rotation={rotation}
      pointerdown={handleClick}
      scale={[scale]}
      {...props}
    />
  );
}

export default RotatingBunny;

// const RotatingBunny = props => {
//   const [rotation, setRotation] = useState(0);
//   const [scale, setScale] = useState(1);
//   const { setScore, score } = props;

//   const animate = delta => {
//     setRotation(rotation + 0.1 * delta);
//   };

//   const handleClick = () => {
//     setScore(score + 1);
//     setScale(scale * 1.25);
//   };

//   useEffect(() => {
//     props.app.ticker.add(animate);
//     return () => {
//       props.app.ticker.remove(animate);
//     };
//   }, [animate, props.app.ticker]);

//   return (
//     <Bunny
//       buttonMode
//       interactive
//       pointerdown={handleClick}
//       scale={new PIXI.Point(scale, scale)}
//       {...props}
//       rotation={rotation}
//     />
//   );
// };

// export default withApp(RotatingBunny);
