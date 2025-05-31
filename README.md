<h1 align="center"> 🧠 MindMitra </h1>

> <p align = "center"> *Your Friendly AI Buddy for Emotional Support & Motivation* ✨ </p>

![MindMitra Banner](banner.gif)

---

## 🚀 Introduction

**MindMitra** is a voice- and chat-based AI-powered emotional wellness companion designed specifically for **students**. Built with the power of LLMs, MindMitra helps users:

* Reflect on their **daily moods** 😌
* Receive **motivational nudges** and micro-coaching 💪
* Experience **empathetic conversations** through voice or chat 🗣️
* Track emotional progress over time 📈

> 🧪 This is the **first version (v1.0)** of MindMitra, created as a part of a national-level GenAI Hackathon.
📚 [Live Documentation](https://manaskolaskar.notion.site/mind-mitra) - Check out our detailed documentation on Notion

---

## 📦 Features

✅ Voice-based conversations with AI
✅ Chat mode for private interactions
✅ Mood logging with emoji-based UI
✅ Micro-coaching & motivational tips
✅ AI-powered journaling & reflection
✅ Simple, elegant UI with memory support

---

## 🧑‍💻 Tech Stack

| Layer      | Technology                                 | Icon                                                                           |
| ---------- | ------------------------------------------ | ------------------------------------------------------------------------------ |
| Frontend   | [Next.js](https://nextjs.org/)             | ![Next.js](https://img.shields.io/badge/Next.js-000?logo=next.js)              |
| Styling    | [Tailwind CSS](https://tailwindcss.com/)   | ![Tailwind](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwind-css) |
| UI Library | [ShadCN UI](https://ui.shadcn.dev/)        | 🧩 Custom Components                                                           |
| AI Agent   | [OpenAI GPT-4o](https://openai.com/gpt-4o) | ![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?logo=openai)      |
| Voice API  | [Vapi](https://vapi.ai/) + Whisper         | 🎙️ Voice Interaction                                                          |
| Database   | [Supabase](https://supabase.com/)          | ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase)        |
| Deployment | [Vercel](https://vercel.com/)              | ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel)              |

---

## 📁 Project Structure (v1)

```
MindMitra/
├── public/                 # Static assets
├── app/                    # Next.js App Router
│   ├── page.tsx            # Home page
│   └── api/agent/          # AI Agent API route
├── components/             # UI Components (Shadcn)
│   ├── mood-tracker.tsx    # Mood UI
│   ├── voice-agent.tsx     # Voice handler (Vapi)
├── lib/                    # Utility logic
│   ├── ai-agent.ts         # Prompt + system logic
│   ├── db.ts               # Supabase client
├── styles/                 # Global styles
├── README.md               # 📘 This file
└── .env.local              # Environment variables
```

---

## 🛠️ Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/your-team/mindmitra.git
cd mindmitra
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables** in `.env.local`

```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
OPENAI_API_KEY=your_key
VAPI_API_KEY=your_key
```

4. **Run the dev server**

```bash
npm run dev
```

5. **Deploy to Vercel**

> Push the project to GitHub and connect it to Vercel for instant deployment.

---

## 🌟 Screenshots (coming soon)

> 📸 We’ll add interface previews as we progress.



---

## 📌 License [MIT]

This project is open-source and created as a part of a GenAI Hackathon. You’re free to fork, build upon, and innovate!

---

## 💬 Let’s Make AI Empathetic ✨

> MindMitra isn’t just an agent. It’s your daily check-in partner, your cheerleader, your motivator.

📍 *Built with GenAI. Inspired by empathy.*
