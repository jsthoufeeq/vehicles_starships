export const urlReplace = (itemUrl, categoryUrl) => {
  return itemUrl.replace(categoryUrl, '').split('/');
}