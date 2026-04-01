# 🧠 AI-Powered QA Automation with Playwright

A real-world demo project built by **Alexis Freitas** showcasing how modern QA evolves by combining:

- AI (LLMs)
- Agent-based validation
- API + UI automation
- Playwright + Page Object Model (POM)

This project simulates a shopping cart system where AI is used to **detect, validate, and fix issues automatically**, while QA automation ensures reliability across the full stack.

---

# 👨‍💻 Author

**Alexis Alvarez**  
Senior QA Automation Engineer / SDET  

📧 Contact: aalvarezfreitas@gmail.com 
🔗 LinkedIn: https://www.linkedin.com/in/alexisalvarezf/

---

# 📬 Contact

If you'd like to connect, collaborate, or discuss QA + AI:

📧 aalvarezfreitas@gmail.com 

---

# 🔥 What makes this different

This is not a typical automation project.

It demonstrates:

✔ Testing **AI-driven systems**  
✔ Validating **non-deterministic outputs**  
✔ Combining **LLM + deterministic logic**  
✔ Building **agent-based QA flows**  
✔ End-to-end automation (UI + API)

---

# 🧠 Core Concepts

## AI Validation (LLM)
- Cart is analyzed using an LLM
- Detects invalid prices, duplicates, anomalies
- Demonstrates testing of non-deterministic outputs

## Agent-Based Testing
- Combines:
  - AI reasoning
  - deterministic validation rules
- Automatically fixes invalid cart data

## QA Automation Strategy
- API testing with Playwright
- UI testing with Playwright (E2E)
- Page Object Model (POM)
- Async handling and UI synchronization

---

# 🧪 E2E Flow Covered

1. User logs in
2. Navigates to cart page
3. Executes AI agent
4. System:
   - detects issues
   - fixes cart automatically
5. Test validates:
   - decision (`FIXED_CART`)
   - detected issues
   - corrected values

---

# 🏗️ Tech Stack

## Backend
- Node.js
- TypeScript
- Express
- OpenAI API
- Custom AI agent + validation tools

## Frontend
- Next.js (App Router)
- React
- Tailwind CSS

## QA / Automation
- Playwright
- API testing
- UI testing
- Page Object Model (POM)

---

# 📂 Project Structure
```text
ai-shopping/
├── src/                  # Backend (AI + agent + API)
├── frontend/             # Next.js UI
└── tests/
    ├── api/              # API tests
    └── ui/
        ├── pages/        # Page Objects
        └── specs/        # E2E tests