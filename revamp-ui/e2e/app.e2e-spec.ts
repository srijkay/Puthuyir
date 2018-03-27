import { RevampUiPage } from './app.po';

describe('revamp-ui App', function() {
  let page: RevampUiPage;

  beforeEach(() => {
    page = new RevampUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
