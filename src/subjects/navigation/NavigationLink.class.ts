export default class NavigationLink {
  label: string;
  pathTo: string;

  constructor(label: string, pathTo: string) {
    this.label = label;
    this.pathTo = pathTo;
  }
}