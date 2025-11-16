import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import { HomePage } from "../pages/homepage";
import { TestData } from "../testdata/testdata";

export interface fixtureOptions {
  loginpage: LoginPage;
  homepage: HomePage;
  testdata: TestData;
}
export const test = base.extend<fixtureOptions>({
  testdata: async ({}, use) => {
    const testdata = new TestData();
    await use(testdata);
  },

  loginpage: async ({ page, context, testdata }, use) => {
    const loginpage = new LoginPage(page, context, testdata);
    await use(loginpage);
  },

  homepage: async ({ page, context, testdata }, use) => {
    const homepage = new HomePage(page, context, testdata);
  },
});
