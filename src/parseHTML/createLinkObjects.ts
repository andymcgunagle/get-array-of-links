import { getHref } from "./getHref";
import { LinkObject } from "./getLinkObjects";
import { getText } from "./getText";

export function createLinkObjects(contentsBetweenAllAnchorTags: string[]): LinkObject[] {
  return contentsBetweenAllAnchorTags.map(anchorTagContents => {
    return {
      text: getText(anchorTagContents),
      href: getHref(anchorTagContents),
    };
  });
};