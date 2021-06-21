import { createActions } from 'ractionx';

const prefix = '@reefs/app';

const types = [
  'SET_GLOBAL_SCORE',
  'SET_GAME1_SCORE',
  'RESET_GAME1_SCORE',
  'SET_LOCAL_GAME1_SCORE',
  'SET_LAST_GAME1_SCORE',
  'SET_GAME2_SCORE',
  'RESET_GAME2_SCORE',
  'SET_LOCAL_GAME2_SCORE',
  'SET_LAST_GAME2_SCORE',
  'SET_GAME3_SCORE',
];

export const {
  setGlobalScore,
  setGame1Score,
  setLocalGame1Score,
  setLastGame1Score,
  resetGame1Score,
  setGame2Score,
  setLocalGame2Score,
  setLastGame2Score,
  resetGame2Score,
  setGame3Score,
} = createActions(prefix, types);

export default {
  setGlobalScore,
  setGame1Score,
  setLocalGame1Score,
  setLastGame1Score,
  resetGame1Score,
  setGame2Score,
  setLocalGame2Score,
  setLastGame2Score,
  resetGame2Score,
  setGame3Score,
};
