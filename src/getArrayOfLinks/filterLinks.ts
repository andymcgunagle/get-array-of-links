import { LinkObject } from "../parseHTML/getLinkObjects";

export function filterLinks(links: LinkObject[]): LinkObject[] {
  // Filter out unwanted links
  links = links.filter(link => {
    return (
      link.text.length > 30 &&
      link.text.length < 250 &&
      !link.text.includes('<img') &&
      !link.text.includes('Paid Program') &&
      !link.href.includes('#') &&
      !link.href.includes('sponsored')
    );
  });

  // Filter out duplicate links
  links = links.filter((link, index, array) => {
    return array.findIndex(l => l.href === link.href) === index;
  });

  return links;
};
