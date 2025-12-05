# Vibezee

A simple, responsive language-exchange app built with React + Vite.

This project lets users pick the languages they speak and the languages they want to learn, then helps them find matching partners and chat in real time. It’s intentionally lightweight so you can plug in a backend or real authentication later.

---

## Quick overview

- Create a profile with native and learning languages  
- See suggested matches  
- One-to-one chat interface  
- Responsive UI for mobile and desktop  
- Swap mock data for an API whenever you want

---

## Tech stack

- React (functional components)  
- Vite (dev server + build)  
- react-router for navigation  
- Tailwind CSS for styling  
- Socket.io for real time chat

---

## Getting started

### Prerequisites

- Node.js 14+ and npm (or yarn/pnpm)

---

### Clone and run

```bash
# clone
git clone https://github.com/Krapa007/Vibezee-Project.git
cd Vibezee-Project

# install dependencies
npm install
# or: yarn

# dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview

```

---

## Project structure
```
Vibezee-Project/
├─ public/                # static assets, index.html
├─ src/
│  ├─ components/         # UI components (match cards, chat UI, forms)
│  ├─ pages/              # main screens (Home, Profile, Chat)
│  ├─ data/               # mock users, matches, messages
│  ├─ services/           # api wrappers or socket logic
│  ├─ styles/             # CSS
│  └─ main.jsx
├─ .env                   # environment variables
├─ package.json
└─ README.md
```

Adjust this to match your repo if naming differs.

---

## Data format (users & chats)

## User object
```
{
  "id": "user-123",
  "username": "mia",
  "nativeLanguages": ["en"],
  "learningLanguages": ["es"],
  "bio": "Learning Spanish for travel."
}
```
## Chat message
```
{
  "from": "user-123",
  "text": "Hola!",
  "timestamp": "2025-01-01T10:00:00Z"
}
```
Place arrays of these in src/data/ (like users.json and messages.json), or replace them with API calls.

---

## Routing suggestions
```
/ — home / list of matches
/profile/:id — user profile
/chat/:partnerId — chat screen
(optional) /settings
```
Use react-router v6 with <Routes> and <Route>.

---

## Scripts (common)
```
Typical scripts:
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```
Add linting/testing scripts later if needed.

---

## Deployment

Build with:
```
npm run build
```
Deploy the dist/ folder to:
 - Netlify
 - Vercel
 - GitHub Pages
 - Any static host

Netlify example:
 - Build command: npm run build
 - Publish directory: dist
---

## Ideas & roadmap

 - Real backend with authentication
 - Matchmaking algorithm improvements
 - Persist chat messages to a database
 - Live presence (online/offline)
 - Group chats or topic-based rooms
 - Add ESLint, Prettier and automated tests

---

## Contributing

Fork the repo
 - Create a branch: git checkout -b feat/your-feature
 - Commit: git commit -m "Add feature"
 - Push and open a PR
 
Try to keep PRs focused and include screenshots for UI changes.

---

## Contact

Maintained by @Krapa007.

---

## License

MIT License

Copyright (c) 2025 Krapa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
