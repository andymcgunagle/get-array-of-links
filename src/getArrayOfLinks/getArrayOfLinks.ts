import axios from 'axios';
import { filterLinks } from './filterLinks';
import { formatLinks } from './formatLinks';
import { LinkObject, getLinkObjects } from '../parseHTML/getLinkObjects';

export async function getArrayOfLinks(
  url: string,
  options: Options = {
    useFilters: true,
    formatLinks: true,
  },
) {
  try {
    let links: LinkObject[] = [];

    const response = await axios.get(url);
    const html: string = response.data.toString();

    links = getLinkObjects(html);

    if (options.useFilters) links = filterLinks(links);
    if (options.customFilters) links = options.customFilters(links);

    if (options.formatLinks) links = formatLinks(links, url);
    if (options.customFormatting) links = options.customFormatting(links, url);

    if (options.limit) {
      return links.slice(0, options.limit);
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
  formatLinks?: boolean,
  customFormatting?: (links: LinkObject[], url?: string) => LinkObject[];
};
