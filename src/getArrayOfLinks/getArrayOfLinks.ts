import axios from 'axios';
import { filterLinks } from './filterLinks';
import { formatLinks } from './formatLinks';
import { LinkObject, getLinkObjects } from '../parseHTML/getLinkObjects';

export async function getArrayOfLinks(
  url: string,
  {
    limit,
    useFilters = true,
    customFilters,
    useFormatting = true,
    customFormatting,
  }: Options,
) {
  try {
    let links: LinkObject[] = [];

    const response = await axios.get(url);
    const html: string = response.data.toString();

    links = getLinkObjects(html);

    if (useFilters) links = filterLinks(links);
    if (customFilters) links = customFilters(links);

    if (useFormatting) links = formatLinks(links, url);
    if (customFormatting) links = customFormatting(links, url);

    if (limit) {
      return links.slice(0, limit);
    };

    return links;
  } catch (error) {
    console.error(error);
  };
};

interface Options {
  limit?: number,
  useFilters?: boolean,
  customFilters?: (links: LinkObject[]) => LinkObject[];
  useFormatting?: boolean,
  customFormatting?: (links: LinkObject[], url?: string) => LinkObject[];
};
