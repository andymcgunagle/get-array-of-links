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

    // Parse ascii characters
    link.text = link.text.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));

    // Replace excess whitespace with single space
    link.text = link.text.replace(/\s\s+/g, ' ');

    return link;
  });
};
