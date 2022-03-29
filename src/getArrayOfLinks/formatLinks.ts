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

    // Replace common unicode characters
    link.text = link.text.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
      return '&#' + i.charCodeAt(0) + ';';
    });

    // Replace excess whitespace with single space
    link.text = link.text.replace(/\s\s+/g, ' ');

    return link;
  });
};
