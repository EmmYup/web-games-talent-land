import React from 'react';
import { Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import apexLogo from '../assets/apex-logo-white.png';

const bunny = apexLogo;
const centerAnchor = new PIXI.Point(0.5, 0.5);

const Logo = props => {
  return (
    <Sprite
      anchor={centerAnchor}
      texture={PIXI.Texture.from(bunny)}
      {...props}
    />
  );
};

export default Logo;
