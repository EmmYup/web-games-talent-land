import { createActions } from 'ractionx';

const prefix = '@reefs/game2';

const types = ['GET_SCORE', 'SET_SCORE'];

export const { getScore, setScore } = createActions(prefix, types);

export default { getScore, setScore };
