import { Page, expect } from "@playwright/test";

// Define the MainPage class
export class PageBase {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToMainPage(url: any) {
    if (!url) {
      throw new Error("Main page URL is not set");
    }
    await this.page.goto(url);
  }

  async checkMainPageUrl(url: any, value: RegExp) {
    expect(url).toMatch(value);
  }

  async confirmCookies() {
    await this.page.getByText("Confirmar la selección").click();
  }
}
