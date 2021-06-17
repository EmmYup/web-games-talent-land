import { Component } from 'react';
import { withApp } from 'react-pixi-fiber';
import Bunny from '../../sprites/bunny';
import * as PIXI from 'pixi.js';

class RotatingBunny extends Component {
  state = {
    rotation: 0,
    scale: 1,
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

  handleClick = () => {
    this.setState((state) => ({ ...state, scale: state.scale * 1.25 }));
  };

  render() {
    return (
      <Bunny
        buttonMode
        interactive
        pointerdown={this.handleClick}
        scale={new PIXI.Point(this.state.scale, this.state.scale)}
        {...this.props}
        rotation={this.state.rotation}
      />
    );
  }
}

export default withApp(RotatingBunny);
