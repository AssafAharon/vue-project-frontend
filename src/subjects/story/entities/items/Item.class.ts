export default class Item {
  top: number;
  left: number;
  width: number;
  height: number;
  zIndex: number;

  constructor(top, left, width, height, zIndex) {
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
    this.zIndex = zIndex;
  }
}