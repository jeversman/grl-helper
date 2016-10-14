import { GrlHelperPage } from './app.po';

describe('grl-helper App', function() {
  let page: GrlHelperPage;

  beforeEach(() => {
    page = new GrlHelperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
