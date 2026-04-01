import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { analyzeCart } from "./ai.js";
import { runAgent } from "./agent.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/analyze-cart", async (req, res) => {
  try {
    const result = await analyzeCart(req.body);

    console.log("ANALYZE INPUT:", req.body);
    console.log("ANALYZE OUTPUT:", result);

    res.json({ result });
  } catch (error) {
    console.error("Error analyzing cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/agent", async (req, res) => {
  try {
    const result = await runAgent(req.body);

    console.log("AGENT INPUT:", req.body);
    console.log("AGENT OUTPUT:", result);

    res.json(result);
  } catch (error) {
    console.error("Error running agent:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});