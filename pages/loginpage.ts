import { Locator } from "@playwright/test";
import { test } from "../fixtures/fixtures";
import { BasePage } from "./basepage";

export class LoginPage extends BasePage {
  readonly username: Locator = this.page.locator("#username");
  readonly password: Locator = this.page.locator("#passwprd");
  readonly submitBtn: Locator = this.page.getByRole("button", {
    name: "Submit",
  });

  async loginpage(): Promise<void> {
    const url = process.env.url || "";
    const username = process.env.username || "";
    const password = process.env.password || "";
    await this.page.goto(url);
    await this.username.fill(username);
    await this.username.fill(password);
    await this.submitBtn.click({ force: true });
  }
}
