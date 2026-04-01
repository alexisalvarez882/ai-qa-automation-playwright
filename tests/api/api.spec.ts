import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3001";

test.describe("AI + Agent API Tests", () => {
  test("analyze-cart detects invalid price", async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/analyze-cart`, {
      data: {
        items: [{ name: "bad item", price: 0 }],
      },
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    console.log("AI Response:", body.result);

    const text = body.result.toLowerCase();

    expect(
      text.includes("invalid") ||
      text.includes("error") ||
      text.includes("price")
    ).toBeTruthy();
  });

  test("agent fixes invalid cart", async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/agent`, {
      data: {
        items: [{ name: "bad item", price: 0 }],
      },
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    console.log("Agent Response:", body);

    expect(body.action).toBe("FIXED_CART");
    expect(body.issues.length).toBeGreaterThan(0);
    expect(body.fixedCart.items[0].price).toBe(1);
  });
});