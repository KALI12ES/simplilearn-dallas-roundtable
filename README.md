cat << 'EOF' > README.md
# Simplilearn – Dallas Round Table Landing Page

A pixel-perfect landing page built as part of the **Simplilearn SDE-1 Technical Assessment**.  
This project translates the provided Figma design (Option A) into a fully functional, responsive web application using **Next.js App Router** and **Server Actions**.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Architecture:** Server Components + Server Actions
- **Backend Integration:** Airtable (RSVP form)
- **Deployment:** Vercel

---

## ✨ Features

- 100% Figma-accurate UI (spacing, typography, colors)
- Fully responsive (desktop & mobile)
- RSVP form powered by **Next.js Server Actions**
- Secure Airtable integration using environment variables
- Reusable, modular component architecture
- Optimized for performance and clean code readability

---

## 📝 RSVP Form Flow

1. User submits email via the RSVP form
2. Form is handled using a **Next.js Server Action**
3. Email is securely saved to an Airtable base
4. Loading and success states are handled on the client

---

## 🔧 Local Setup

### Clone and run
```bash
git clone https://github.com/KALI12ES/simplilearn-dallas-roundtable.git
cd simplilearn-dallas-roundtable
npm install
npm run dev
