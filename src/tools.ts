import type { Cart } from "./types.js";

export function validateCart(cart: Cart): string[] {
  const issues: string[] = [];
  const seenNames = new Set<string>();

  for (const item of cart.items) {
    if (item.price <= 0) {
      issues.push(`Invalid price for item: ${item.name}`);
    }

    if (seenNames.has(item.name)) {
      issues.push(`Duplicate item found: ${item.name}`);
    }

    seenNames.add(item.name);

    if (item.quantity !== undefined && item.quantity > 100) {
      issues.push(`Suspicious quantity for item: ${item.name}`);
    }
  }

  return issues;
}

export function fixCart(cart: Cart): Cart {
  return {
    items: cart.items.map((item) => ({
      ...item,
      price: item.price <= 0 ? 1 : item.price,
    })),
  };
}