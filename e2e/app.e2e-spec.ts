import { MyBlogAppPage } from './app.po';

describe('my-blog-app App', () => {
  let page: MyBlogAppPage;

  beforeEach(() => {
    page = new MyBlogAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
