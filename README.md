# 🧠 AI Shopping Assistant + QA Automation Demo

This project was designed and built by **Alexis Freitas** as a hands-on demo to explore how modern QA can evolve with **AI, agents, automation, and full-stack validation**.

It demonstrates how a QA engineer can combine:
- AI-powered cart validation (LLM)
- Agent-based decision logic
- API + UI automation with Playwright
- Page Object Model (POM)
- End-to-end testing (login → cart → agent)

---

# 👨‍💻 Author

**Alexis Alvarez Freitas**  
Senior AI QA Automation Engineer / SDET  
Built and authored by Alexis Freitas.

---

# 🚀 Tech Stack

## Backend
- Node.js
- TypeScript
- Express
- OpenAI API
- Custom AI Agent + validation tools

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

# 🧠 What this project demonstrates

### ✅ AI in QA
- Using LLMs to analyze cart issues
- Validating non-deterministic responses

### ✅ Agent-based testing
- Hybrid approach: AI + deterministic rules
- Automated cart correction logic

### ✅ End-to-End Automation
- Login flow
- Cart validation
- Agent execution
- Result verification

### ✅ Modern QA Practices
- Separation of concerns with Page Objects
- API + UI coverage
- Async handling and waits
- Debugging browser/network behavior

---

# 📂 Project Structure

```text
ai-shopping/
  src/                  # Backend (API + AI + agent)
  frontend/             # Next.js UI
  tests/
    api/                # API tests
    ui/
      pages/            # Page Objects
      specs/            # E2E tests