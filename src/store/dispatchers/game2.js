import { appActions as actions } from '../actions';

const dispatcher = dispatch => ({
  onSetScore: score => dispatch(actions.setGame1Score(score)),
  onSetLocalScore: score => dispatch(actions.setLocalGame2Score(score)),
  onSetLastScore: score => dispatch(actions.setLastGame2Score(score)),
  onResetScore: () => dispatch(actions.resetGame2Score()),
  onSetGlobalScore: score => dispatch(actions.setGlobalScore(score)),
});

export default dispatcher;
