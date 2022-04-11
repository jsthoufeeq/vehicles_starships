import { urlReplace } from './urlReplace';

describe('url replace util', () => {
  it('should return the replaced url', () => {
    const [itemUrl, categoryUrl] = ['/vehicles/2/', '/vehicles'];
    const expectedOutput = ['', '2', ''];
    expect(urlReplace(itemUrl, categoryUrl)).toEqual(expectedOutput);
  })
});
