import { createLinkObjects } from "./createLinkObjects";
import { getContentsBetweenAllAnchorTags } from "./getContentsBetweenAllAnchorTags";

export function getLinkObjects(html: string): LinkObject[] {
  return createLinkObjects(getContentsBetweenAllAnchorTags(html));
};

export interface LinkObject {
  text: string,
  href: string,
};
