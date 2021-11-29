import Page from "./Page.class";

export default class PageSide {
  paperNumber: number;
  frontPage: Page;
  backPage: Page;

  constructor(paperNumber: number, frontPage: Page, backPage: Page) {
    this.paperNumber = paperNumber;
    this.frontPage = frontPage;
    this.backPage = backPage;
  }
}