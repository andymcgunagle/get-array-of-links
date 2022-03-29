import { LinkObject } from "../parseHTML/getLinkObjects";

function addBaseUrlIfNeeded(link: LinkObject, url: string): LinkObject {
  if (link.href.includes('/') && !link.href.includes('http')) {
    link.href = `${url}${link.href}`;
  };

  return link;
};

export function formatLinks(links: LinkObject[], url: string): LinkObject[] {
  return links.map(link => {
    addBaseUrlIfNeeded(link, url);

    // Remove \n
    link.text = link.text.replace(/\n/g, '');

    // Remove '...'
    link.text = link.text.replace(/\.\.\./g, '');

    // Replace '&amp;' with '&'
    link.text = link.text.replace(/&amp;/g, '&');

    // Replace unicode characters
    link.text = link.text.replace(/&#x([0-9a-f]{2,5});/gi, function (match, grp) {
      return String.fromCharCode(parseInt(grp, 16));
    });

    // Replace excess whitespace with single space
    link.text = link.text.replace(/\s\s+/g, ' ');

    return link;
  });
};
