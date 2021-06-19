import { appActions as actions } from '../actions';

const dispatcher = dispatch => ({
  onSetScore: score => dispatch(actions.setGame1Score(score)),
});

export default dispatcher;
