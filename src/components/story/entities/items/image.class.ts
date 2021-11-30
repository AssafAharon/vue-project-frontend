import Item from "./Item.class";

export default class Image extends Item {
  src: string;

  constructor(top: number, left: number, width: number, height: number, zIndex: number, src: string) {
    super(top, left, width, height, zIndex);
    this.src = src;
  }
}