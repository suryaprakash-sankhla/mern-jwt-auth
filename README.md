# 🔐 MERN Authentication System

A full-stack authentication application built with the **MERN stack**, featuring secure JWT authentication, protected routes, profile management, and cloud-based image uploads.

---

## 🚀 Live Demo

**Frontend:** https://mern-jwt-auth-sp.vercel.app

**Backend API:** https://mern-jwt-auth-0spg.onrender.com

---

## ✨ Features

- 🔑 User Registration & Login
- 🔒 JWT Authentication with HTTP-only Cookies
- 🛡️ Protected Routes & Middleware
- 👤 User Profile Management
- 🖼️ Profile Image Upload
- ☁️ Cloudinary Image Storage
- 🔐 Password Hashing with bcryptjs
- 🚪 Secure Logout
- 🗄️ MongoDB Atlas Integration
- ⚡ REST API Architecture
- 🔄 Global User State using React Context API
- 📱 Fully Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- Context API

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Authentication & Storage

- JWT (JSON Web Tokens)
- HTTP-only Cookies
- bcryptjs
- Multer
- Cloudinary

---

## 🔄 Application Flow

```text
React Frontend
      │
      ▼
Axios Request
      │
      ▼
Express REST API
      │
      ▼
Authentication Middleware
      │
      ▼
MongoDB Atlas
      │
      ▼
Cloudinary
      │
      ▼
Response
      │
      ▼
React Context API
```

---

## 🧠 What I Learned

Throughout this project, I practiced:

- Implementing complete user authentication
- Password hashing with bcryptjs
- JWT token generation and verification
- HTTP-only cookie authentication
- Building protected API routes
- Creating reusable Express middleware
- Managing global authentication state with Context API
- Uploading profile images using Multer
- Storing images securely with Cloudinary
- Integrating React with Express REST APIs
- Connecting MongoDB using Mongoose
- Handling errors and debugging API requests
- Deploying a full-stack MERN application to production

---

## 📂 Project Structure

```text
client/
├── assets/
├── components/
├── context/
├── pages/
└── App.jsx

server/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── src/
└── package.json
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **server** directory.

```env
MONGODB_URL=

JWT_SECRET=

CLIENT_URL=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/suryaprakash-sankhla/mern-jwt-auth.git
```

Install frontend dependencies:

```bash
cd client
npm install
npm run dev
```

Install backend dependencies:

```bash
cd server
npm install
npm run dev
```

---

## 🎯 Purpose

This project was built to strengthen my understanding of **full-stack authentication** and modern **MERN application architecture** through hands-on implementation.

It represents my transition from building frontend interfaces to developing complete applications involving **authentication, REST APIs, databases, middleware, secure cookies, cloud storage, and production deployment**.

---

## 📄 License

This project is created for learning and portfolio purposes.