export function getHref(anchorTagContents: string): string {
  return anchorTagContents.slice(0, anchorTagContents.indexOf('"'));
};
