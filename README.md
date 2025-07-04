# 📊 GrowthProAI - Mini Local Business Dashboard

This is a full stack application built as part of the GrowthProAI Full Stack Intern Assignment. It simulates how small local businesses can view and manage their Google Business-style metrics and AI-generated SEO content.

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Data Persistence:** Browser `localStorage`

---

## 📁 Project Structure

```
project-root/
│
├── backend/                 # Node.js + Express server
│   ├── server.js
│   └── generateHeadline.js
│
├── frontend/                # React + Tailwind CSS app
│   ├── src/
│   │   ├── components/
│   │   │   ├── BusinessForm.jsx
│   │   │   ├── DisplayCard.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── context/
│   │   │   └── BusinessContext.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
```

---

## 🚀 Features

- 📥 Submit Business Name and Location
- ⭐ Simulated Google Rating + Review Count
- 🧠 AI-style SEO Headline generation
- 🔁 Regenerate headline button
- 💾 Persistent data using `localStorage`
- 🔄 Loading Spinner for transitions
- 📱 Responsive design using Tailwind CSS

---

## ⚙️ Getting Started

### 🔧 Prerequisites

- Node.js (v16+)
- npm (v8+)

---

### ▶️ Backend Setup

1. Open terminal and navigate to the `backend/` folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   node server.js
   ```

> The backend will run at `http://localhost:5000`

---

### 💻 Frontend Setup

1. Open a new terminal and navigate to the `frontend/` folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm run dev
   ```

> The frontend will run at `http://localhost:5173`

---

## 🧪 API Endpoints

### `POST /business-data`

- **Request:**  
  ```json
  {
    "name": "Cake & Co",
    "location": "Mumbai"
  }
  ```

- **Response:**
  ```json
  {
    "rating": 4.3,
    "reviews": 127,
    "headline": "Why Cake & Co is Mumbai's Top Choice in 2025"
  }
  ```

---

### `GET /regenerate-headline?name=...&location=...`

- **Response:**
  ```json
  {
    "headline": "The Buzz Around Cake & Co in Mumbai – What You Need to Know"
  }
  ```

---

## ✅ Bonus Features

- 🧠 Global State Management using React Context API
- 🌀 Loading Spinner during API calls
- 🧬 AI-style SEO headlines using static generator
- 🛡️ Client-side validation

---

## 👨‍💻 Author

- **Janaki Rama Raju** — [Your GitHub Profile](https://github.com/LVSJanakiRamaraju)

---

## 📄 License

This project is for educational purposes and part of a technical internship assignment.
