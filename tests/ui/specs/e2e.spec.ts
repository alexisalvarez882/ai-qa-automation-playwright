import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { CartPage } from "../pages/CartPage.js";

test("user logs in and runs the agent", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  page.on("console", (msg) => {
    console.log("BROWSER LOG:", msg.type(), msg.text());
  });

  page.on("pageerror", (err) => {
    console.log("PAGE ERROR:", err.message);
  });

  await loginPage.navigate();
  await loginPage.login("test@test.com", "1234");

  await expect(page).toHaveURL("http://localhost:3000/cart");

  const agentResponsePromise = page.waitForResponse(
    (response) =>
      response.url().includes("/api/agent") && response.request().method() === "POST"
  );

  await cartPage.clickRunAgent();

  const agentResponse = await agentResponsePromise;
  console.log("Agent response status:", agentResponse.status());

  const resultText = await cartPage.getResultText();
  console.log("UI result text:", JSON.stringify(resultText));

  await expect.poll(async () => await cartPage.getResultText()).not.toBe("");

  const finalText = await cartPage.getResultText();

  expect(finalText).toContain("FIXED_CART");
  expect(finalText).toContain("Invalid price");
});