export const tileWidth = 16;
export const tileHeight = 16;

export const spriteSettings = {
  "backgrounds": [
    {
      "tile": "sky",
      "ranges": [
        [
          0, window.innerWidth / tileWidth,
          0, window.innerHeight / tileHeight - 2
        ]
      ]
    },
    {
      "tile": "ground",
      "ranges": [
        [
          0, window.innerWidth / tileWidth,
          window.innerHeight / tileHeight - 2, window.innerHeight / tileHeight
        ]
      ]
    }
  ]
}