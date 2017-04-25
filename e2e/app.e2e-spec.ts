import { Angular2ReduxBoilerplatePage } from './app.po';

describe('angular2-redux-boilerplate App', () => {
  let page: Angular2ReduxBoilerplatePage;

  beforeEach(() => {
    page = new Angular2ReduxBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
