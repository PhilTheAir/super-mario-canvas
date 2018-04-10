import { SpriteSheet } from "./sprite";
import { loadImage } from './loaders';
import { tileWidth, tileHeight, spriteSettings } from '../config/static';

export const drawBackground = (bg, context, sprites) => {
  bg.ranges.forEach(([x1, x2, y1, y2]) => {
    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        sprites.drawTile(bg.tile, context, x, y);
      }
    }
  })
}

export const superMario = () => {
  const canvas = document.getElementById('mario');
  const context = canvas.getContext('2d');
  loadImage('img/tiles.png')
    .then(image => {
      const sprites = new SpriteSheet(image, tileWidth, tileHeight);
      sprites.define("ground", 0, 0);
      sprites.define("sky", 3, 23);
      spriteSettings.backgrounds.forEach(bg => drawBackground(bg, context, sprites));
    })
}