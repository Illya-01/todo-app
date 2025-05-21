# Todo App

A full-stack Todo application built with React (TypeScript, Tailwind) and Express (TypeScript, MongoDB).

---

## Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB (local or remote)

---

## Backend Setup

1. **Install dependencies:**

   ```bash
   cd backend
   npm install
   ```

2. **Configure environment:**

   - Edit `.env` if needed (default uses `mongodb://localhost:27017/todo-app` and port `5000`).

3. **Run MongoDB:**  
   Make sure MongoDB is running locally or update the URI in `.env` to your remote instance.

4. **Start the backend server:**

   ```bash
   npm run dev
   ```

   The backend API will be available at [http://localhost:5000](http://localhost:5000).

---

## Frontend Setup

1. **Install dependencies:**

   ```bash
   cd frontend
   npm install
   ```

2. **Start the frontend dev server:**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).
