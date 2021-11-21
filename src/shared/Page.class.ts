export enum ElementHTMLTags {
  TITLE = "h2",
  PARAGRAPH = "p",
  IMAGE = "img",
  BUTTON = "button"
}

export enum ElementStyles {
  HEIGHT = "height",
  WIDTH = "WIDTH",
  COLOR = "color",
  BG_COLOR = "background-color"
}

export type PageElement = {
  htmlTag: ElementHTMLTags;
  class: string;
  slot: string;
  additionalAttributes: string[];
  clickable: boolean;
  style: ElementStyles[];
}

export const PageTemplate = "<div></div>";

export const PageStyle = "<style></style>";

export class Page {
  name: string;
  template: string;
  elements: PageElement[];
  style: string;

  constructor(name: string) {
    this.name = name;
    this.template = PageTemplate;
    this.elements = [];
    this.style = PageStyle;
  }
}