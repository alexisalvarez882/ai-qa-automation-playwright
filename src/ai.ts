import dotenv from "dotenv";
import OpenAI from "openai";
import type { Cart } from "./types.js";

dotenv.config();
console.log("OPENAI_API_KEY loaded:", !!process.env.OPENAI_API_KEY);

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeCart(cart: Cart): Promise<string> {
  const prompt = `
You are a QA AI system.

Analyze this shopping cart and detect:
- invalid prices
- duplicated items
- suspicious quantities

Cart:
${JSON.stringify(cart)}
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const firstChoice = response.choices?.[0];

  if (!firstChoice) {
    return "No response from AI";
  }

  return firstChoice.message?.content ?? "";
}