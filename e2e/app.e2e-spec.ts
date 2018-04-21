import { Ng4cmsPage } from './app.po';

describe('ng4cms App', () => {
  let page: Ng4cmsPage;

  beforeEach(() => {
    page = new Ng4cmsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
