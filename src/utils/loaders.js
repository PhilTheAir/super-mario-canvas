export const loadImage = url => {
  return new Promise(resolved => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolved(image);
    });
    image.src = url;
  })
}