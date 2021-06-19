import { useState } from 'react';
import { Stage } from 'react-pixi-fiber';
import RotatingBunny from '../../components/RotatingBunny';
import { connect } from 'react-redux';
import dispatcher from '../../store/dispatchers/game1';
import selectors from '../../store/selectors/game1';

const Game1 = props => {
  // const [score, setScore] = useState(0);
  const height = 450;
  const width = 600;
  const OPTIONS = {
    backgroundColor: 0x1099bb,
    height: height,
    width: width,
  };
  const { game1Score } = props;

  return (
    <div>
      <p>Score: {game1Score}</p>
      <Stage options={OPTIONS}>
        <RotatingBunny x={width / 2} y={height / 2} {...props} />
      </Stage>
    </div>
  );
};

export default connect(selectors.propsSelector, dispatcher)(Game1);
