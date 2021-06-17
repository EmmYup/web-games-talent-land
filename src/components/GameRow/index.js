import PropTypes from 'prop-types';
import { withApp } from 'react-pixi-fiber';
import GameTile from '../GameTile';

const GameRow = (props) => {
  const { boardSize, row, index } = props;
  const tiles = [];
  for (let colIndex = 0; colIndex < boardSize.width; colIndex++) {
    const set = row & (2 << colIndex);
    tiles.push(
      <GameTile
        key={colIndex}
        x={colIndex * 40}
        y={index * 40}
        width={38}
        height={38}
        fill={set ? 0xff0000 : 0x333333}
      />
    );
  }
  return tiles;
};

export default withApp(GameRow);

GameRow.contextTypes = {
  app: PropTypes.object,
};
