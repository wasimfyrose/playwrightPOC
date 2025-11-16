import { Page, Locator } from "@playwright/test";
import { test } from "../fixtures/fixtures";
import { BasePage } from "./basepage";

export class HomePage extends BasePage {
  readonly logoutbtn: Locator = this.page.locator("//a[text()='Log out']");

  async homepage() {
    const text = process.env.titleText;
    //await this.page.getByTitle(text)
    // await expect().
    await this.logoutbtn.click();
  }

  //Logged In Successfully | Practice Test Automation
}
