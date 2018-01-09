import { AdminTemplatePage } from './app.po';

describe('admin-template App', function() {
  let page: AdminTemplatePage;

  beforeEach(() => {
    page = new AdminTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
