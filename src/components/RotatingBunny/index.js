import { Component } from 'react';
import { withApp } from 'react-pixi-fiber';
import Bunny from '../../sprites/bunny';

class RotatingBunny extends Component {
  state = {
    rotation: 0,
  };

  componentDidMount() {
    this.props.app.ticker.add(this.animate);
  }

  componentWillUnmount() {
    this.props.app.ticker.remove(this.animate);
  }

  animate = (delta) => {
    this.setState((state) => ({
      ...state,
      rotation: state.rotation + 0.1 * delta,
    }));
  };

  render() {
    return <Bunny {...this.props} rotation={this.state.rotation} />;
  }
}

export default withApp(RotatingBunny);
