function cleanText(text: string) {
  return text.trim().replace('&amp', '&');
};

export function getText(anchorTagContents: string): string {
  const text = anchorTagContents
    .slice(anchorTagContents.indexOf('"'))
    .split('><')
    .map(text => text.split('>')[1])
    .filter(text => text && text)
    .map(text => text.split('<')[0])[0];

  return text ? cleanText(text) : 'NO VALUE';
};