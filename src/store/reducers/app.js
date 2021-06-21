/* eslint-disable import/no-anonymous-default-export */
import { appActions as app } from '../actions';

const initialState = {
  globalScore: 0,
  game1Score: 0,
  localGame1Score: 0,
  lastGame1Score: 0,
  game2Score: 0,
  lastGame2Score: 0,
  game3Score: 0,
  lastGame3Score: 0,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case app.setGlobalScore.type:
      return { ...state, globalScore: payload };
    case app.setGame1Score.type:
      return { ...state, game1Score: payload };
    case app.setLocalGame1Score.type:
      return { ...state, localGame1Score: payload };
    case app.setLastGame1Score.type:
      return { ...state, lastGame1Score: payload };
    case app.resetGame1Score.type:
      return { ...state, localGame1Score: 0 };
    case app.setGame2Score.type:
      return { ...state, game2Score: payload };
    case app.setLocalGame2Score.type:
      return { ...state, localGame2Score: payload };
    case app.setLastGame2Score.type:
      return { ...state, lastGame2Score: payload };
    case app.resetGame2Score.type:
      return { ...state, localGame2Score: 0 };
    case app.setGame3Score.type:
      return { ...state, game3Score: payload };
    default:
      return state;
  }
}
