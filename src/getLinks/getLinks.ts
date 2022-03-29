import axios from 'axios';
import { filterLinks } from './filterLinks';
import { formatLinks } from './formatLinks';
import { LinkObject, getLinkObjects } from '../parseHTML/getLinkObjects';

export async function getLinks(
  url: string,
  numLinks?: number,
) {
  try {
    let links: LinkObject[] = [];

    const response = await axios.get(url);
    const html: string = response.data.toString();

    links = getLinkObjects(html);

    links = filterLinks(links);

    links = formatLinks(links, url);

    if (numLinks) {
      return links.slice(0, numLinks);
    };

    return links;
  } catch (error) {
    console.error(error);
  };
};
