/* eslint-disable import/no-anonymous-default-export */
import { appActions as app } from '../actions';

const initialState = {
  globalScore: 0,
  game1Score: 0,
  game2Score: 0,
  game3Score: 0,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case app.setGlobalScore.type:
      return { ...state, globalScore: payload };
    case app.setGame1Score.type:
      return { ...state, game1Score: payload };
    case app.setGame2Score.type:
      return { ...state, game2Score: payload };
    case app.setGame3Score.type:
      return { ...state, game3Score: payload };
    default:
      return state;
  }
}
