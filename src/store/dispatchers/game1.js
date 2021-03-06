import { appActions as actions } from '../actions';

const dispatcher = dispatch => ({
  onSetScore: score => dispatch(actions.setGame1Score(score)),
  onSetLocalScore: score => dispatch(actions.setLocalGame1Score(score)),
  onSetLastScore: score => dispatch(actions.setLastGame1Score(score)),
  onResetScore: () => dispatch(actions.resetGame1Score()),
  onSetGlobalScore: score => dispatch(actions.setGlobalScore(score)),
});

export default dispatcher;
