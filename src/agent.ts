import type { Cart } from "./types.js";
import { analyzeCart } from "./ai.js";
import { validateCart, fixCart } from "./tools.js";

export async function runAgent(cart: Cart) {
  const aiAnalysis = await analyzeCart(cart);
  const issues = validateCart(cart);

  if (issues.length > 0) {
    const fixedCart = fixCart(cart);

    return {
      action: "FIXED_CART",
      issues,
      fixedCart,
      aiAnalysis,
    };
  }

  return {
    action: "CART_OK",
    issues: [],
    fixedCart: cart,
    aiAnalysis,
  };
}