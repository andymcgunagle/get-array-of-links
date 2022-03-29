import axios from 'axios';
import { filterLinks } from './filterLinks';
import { formatLinks } from './formatLinks';
import { LinkObject, getLinkObjects } from '../parseHTML/getLinkObjects';

export async function getLinks(
  url: string,
  numLinks: number = 10
) {
  try {
    let links: LinkObject[] = [];

    const response = await axios.get(url);
    const html: string = response.data.toString();

    links = getLinkObjects(html);

    links = filterLinks(links);

    links = formatLinks(links, url);

    return links.slice(0, numLinks);;
  } catch (error) {
    console.error(error);
  };
};
