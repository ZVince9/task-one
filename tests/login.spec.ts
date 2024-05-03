import { test, expect } from "@playwright/test";
import { PageBase } from "../modal/pages/base.page";
import { PageLogin } from "../modal/pages/login.page";

test.describe("Login functionality", () => {
  let pageBase: PageBase;
  let pageLogin: PageLogin;

  test.beforeEach(async ({ page }) => {
    pageBase = new PageBase(page);
    pageLogin = new PageLogin(page);

    await pageLogin.goToMainPage(process.env.MAIN_URL);
    await pageLogin.getToAccessBtn.click();
    await pageLogin.confirmCookies();
  });

  test("Check that with VALID credentials I could login", async () => {
    await pageLogin.getUsernameInput.fill(String(process.env.USERNAME));
    await pageLogin.getPasswordInput.fill(String(process.env.PASSWORD));

    await pageLogin.getAccessButton.click();

    await expect(pageLogin.getUsernameLogginInValue).toBeVisible();
  });

  test("Check that with INVALID credentials I could NOT login", async () => {
    await pageLogin.getUsernameInput.fill(String(process.env.INVALID_USERNAME));
    await pageLogin.getPasswordInput.fill(String(process.env.INVALID_PASSWORD));

    await pageLogin.getAccessButton.click();

    await expect(pageLogin.getUsernameLogginInValue).not.toBeVisible();
  });

  test("Check that with EMPTY credentials I could NOT login", async () => {
    await pageLogin.getUsernameInput.fill(String(""));
    await pageLogin.getPasswordInput.fill(String(""));

    await pageLogin.getAccessButton.click();

    await expect(pageLogin.getLoginAlert).toBeVisible();
  });
});
