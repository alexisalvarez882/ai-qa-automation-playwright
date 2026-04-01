import type { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly runAgentButton: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    this.page = page;
    this.runAgentButton = page.getByRole("button", { name: "Run Agent" });
    this.result = page.locator("#result");
  }

  async clickRunAgent() {
    await this.runAgentButton.click();
  }

  async getResultText() {
    return await this.result.innerText();
  }
}