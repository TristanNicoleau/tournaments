import { TournamentsPage } from './app.po';

describe('tournaments App', () => {
  let page: TournamentsPage;

  beforeEach(() => {
    page = new TournamentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
