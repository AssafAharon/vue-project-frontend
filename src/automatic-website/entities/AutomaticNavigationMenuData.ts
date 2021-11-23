export interface AutomaticPageMetadata {
  pageId: string;
  pageName: string;
}

export interface AutomaticNavigationMenuData {
  websiteName: string;
  pagesMetadata: AutomaticPageMetadata[];
}