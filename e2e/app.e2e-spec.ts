import { WeatherAppNg2Page } from './app.po';

describe('weather-app-ng2 App', function() {
  let page: WeatherAppNg2Page;

  beforeEach(() => {
    page = new WeatherAppNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
