import Page from "./Page.class";

export default class Paper {
  paperNumber: number;
  frontPage: Page;
  backPage: Page;

  constructor(paperNumber: number, frontPage: Page, backPage: Page) {
    this.paperNumber = paperNumber;
    this.frontPage = frontPage;
    this.backPage = backPage;
  }
}