# 🧠 MindMitra - AI-Powered Emotional Support Buddy for Students

## 📌 Product Requirement Document (PRD)

### 🧭 Overview

**MindMitra** is a voice- and chat-based AI agent built specifically for students to provide them with emotional support, motivation, and productivity coaching. It is not a therapist, but a friendly AI companion that helps students track moods, reflect, and stay mentally aligned with their goals.

### 🎯 Goal

To develop an AI-powered emotional support system that helps students improve their emotional well-being, self-awareness, and academic motivation through micro-interactions and empathetic conversations.

### 🧑‍🤝‍🧑 Target Audience

* College and high-school students
* Students facing stress, anxiety, burnout, or low motivation
* Users who prefer private, judgment-free emotional check-ins

---

## 🔍 Problem Statement

Many students struggle with emotional well-being but hesitate to reach out for help. Traditional solutions (therapy, journaling apps) can feel impersonal or intimidating. We want to build an empathetic AI buddy that:

* Listens like a friend (via voice or chat)
* Helps them reflect and journal moods
* Provides daily motivational nudges and advice
* Learns over time and personalizes interactions

---

## 💡 Features

### 1. 🗣️ Voice & Chat Interface

* Natural voice interaction using **Vapi + GPT-4o**
* Optional chat-based mode for privacy or ease

### 2. 📊 Mood Tracking

* Emoji-based mood logging (Happy, Sad, Neutral, Anxious, etc.)
* Visual timeline of past moods

### 3. 🧭 Micro-Coaching Engine

* AI gives 1-2 minute pep talks or productivity suggestions based on current mood
* System prompts vary for each mood state

### 4. 📓 Reflective Journaling

* Daily AI-generated reflection questions
* User responses stored in secure database (Supabase)

### 5. 🧠 Memory + Context

* AI remembers previous moods and uses context to improve conversations
* Personalized feedback and emotional progress tracking

---

## 🏗️ Tech Stack

| Layer       | Technology                         |
| ----------- | ---------------------------------- |
| Frontend    | Next.js + Tailwind CSS + ShadCN UI |
| AI Agent    | OpenAI GPT-4o or Gemini Pro        |
| Voice Agent | Vapi + Whisper                     |
| Database    | Supabase (PostgreSQL + Auth)       |
| Deployment  | Vercel                             |

---

## 📁 Project Assets & Contribution (%)

| File/Asset         | Purpose                                  | Contribution % |
| ------------------ | ---------------------------------------- | -------------- |
| `ai-agent.ts`      | Core logic for mood-based conversations  | 20%            |
| `voice-agent.tsx`  | Handles voice input/output with Vapi     | 15%            |
| `mood-tracker.tsx` | UI for mood tracking                     | 15%            |
| `prompt-engine.ts` | Custom prompts based on emotional states | 10%            |
| `db.ts`            | Supabase interaction logic               | 10%            |
| `ui/` folder       | All reusable UI components               | 20%            |
| `README.md`        | Project overview and usage               | —              |
| `workflow.md`      | AI agent architecture and flow diagrams  | —              |

---

## 🎯 Success Criteria

* Students use the app consistently for daily check-ins
* Users report better emotional awareness and motivation
* Seamless voice + chat agent experience
* Demonstration of AI memory and contextual coaching

---

## 🧑‍💻 Team Members 

* **[Manas Kolaskar](https://github.com/codewmanas)** – Vibe coder
* **[Kevin Gandhi](https://github.com/KGandhi90/)** – Vibe Coder
* **[Bishnoi Sujal](https://github.com/bishnoisujal99/)** – Vibe Coder

---

<!-- ## 📌 Submission Checklist

* [ ] GitHub Repo with clean commit history
* [ ] README with setup instructions
* [ ] Clear architecture and feature breakdown
* [ ] Working demo or deployment link
* [ ] Asset-wise contribution details
* [ ] Screenshots or screen recordings of working features

--- -->

## 📣 Future Scope

* Mood trend analysis with charts
* Daily affirmation and breathing guides
* Multilingual voice support
* Integration with wearable devices for stress detection

---

## 🚀 Let’s build MindMitra — a friendly AI that *listens*, *supports*, and *motivates*. Together!
