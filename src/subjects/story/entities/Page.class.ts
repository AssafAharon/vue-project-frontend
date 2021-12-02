import Item from "./items/Item.class";

export default class Page {
  pageNumber: number;
  items: Item[];

  constructor(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.items = [];
  }
}