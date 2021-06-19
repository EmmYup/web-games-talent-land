import { createActions } from 'ractionx';

const prefix = '@reefs/app';

const types = [
  'SET_GLOBAL_SCORE',
  'SET_GAME1_SCORE',
  'SET_GAME2_SCORE',
  'SET_GAME3_SCORE',
];

export const { setGlobalScore, setGame1Score, setGame2Score, setGame3Score } =
  createActions(prefix, types);

export default {
  setGlobalScore,
  setGame1Score,
  setGame2Score,
  setGame3Score,
};
