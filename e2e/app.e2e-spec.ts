import { AngularVersionPage } from './app.po';

describe('angular-version App', () => {
  let page: AngularVersionPage;

  beforeEach(() => {
    page = new AngularVersionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
