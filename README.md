# 🍔 Food Delivery App

A full-stack Food Delivery web application built with the **MERN Stack** (MongoDB, Express, React, Node.js).

## 🌐 Live Demo

- **Frontend:** [food-delevery.vercel.app](https://food-delevery-wine.vercel.app/)
- **Latest deployment on branch—updates automatically versal URL:** [food-delevery.latest.vercel.app](https://food-delevery-git-main-nethaji-ravis-projects.vercel.app/)
- **Backend API:** [food-delevery-6z6f.onrender.com](https://food-delevery-6z6f.onrender.com)

---

## 📸 Features

- 🍕 Browse food items by category
- 🛒 Add to cart and manage orders
- 🔐 User authentication (Login / Register)
- 📦 Place and track orders
- 🛠️ Admin panel to manage food items and orders

---

## 🗂️ Project Structure

```
Food-Delevery/
├── frontend/       # React + Vite (User Interface)
├── admin/          # React + Vite (Admin Panel)
└── backend/        # Node.js + Express (REST API)
```

---

## 🛠️ Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React 19, React Router, Axios     |
| Admin     | React 19, Vite                    |
| Backend   | Node.js, Express.js               |
| Database  | MongoDB (Mongoose)                |
| Hosting   | Vercel (Frontend), Render (Backend) |

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/nethaji-ravi/Food-Delevery.git
cd Food-Delevery
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
```

Start the backend:

```bash
npm start
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

### 4. Setup Admin Panel

```bash
cd admin
npm install
npm run dev
```

---

## 🔗 API Base URL

The frontend connects to the backend via:

```js
const url = "https://food-delevery-6z6f.onrender.com";
```

---

## 📁 Environment Variables

### Backend (`backend/.env`)

| Variable       | Description                  |
|----------------|------------------------------|
| `MONGODB_URI`  | MongoDB connection string     |
| `JWT_SECRET`   | Secret key for JWT tokens     |
| `PORT`         | Port to run the server (4000) |


---

**Nethaji Ravi**  
GitHub: [@nethaji-ravi](https://github.com/nethaji-ravi)

---

