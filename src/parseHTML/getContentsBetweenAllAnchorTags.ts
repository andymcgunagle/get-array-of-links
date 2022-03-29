export function getContentsBetweenAllAnchorTags(html: string): string[] {
  return html
    .split('<a ')
    .map(link => {
      return link
        .split('</a>')[0]
        .split('href="')[1];
    })
    .filter(link => link && link);
};
