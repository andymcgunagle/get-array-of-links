import { addBaseUrlIfNeeded } from "./addBaseUrlIfNeeded";
import { LinkObject } from "../parseHTML/getLinkObjects";

export function formatLinks(links: LinkObject[], url: string): LinkObject[] {
  return links.map(link => {
    addBaseUrlIfNeeded(link, url);

    // Remove \n
    link.text = link.text.replace(/\n/g, '');

    // Remove '...'
    link.text = link.text.replace(/\.\.\./g, '');

    // Replace excess whitespace with single space
    link.text = link.text.replace(/\s\s+/g, ' ');

    return link;
  });
};