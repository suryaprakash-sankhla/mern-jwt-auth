# 🔐 MERN Authentication System

A full-stack authentication application built with the **MERN stack**, implementing user authentication, protected routes, profile management, and cloud-based image uploads.

## 🚀 Live Demo

👉 **[View Live Demo](YOUR_LIVE_LINK)**

## 📸 Preview



## ✨ Features

- 🔑 User Signup & Login
- 🔒 JWT Authentication with HTTP-only Cookies
- 🛡️ Protected Backend Routes
- 👤 User Profile Management
- 🖼️ Profile Image Upload
- ☁️ Cloudinary Image Storage
- 🔐 Password Hashing with bcrypt
- 🚪 Secure Logout
- 🗄️ MongoDB Database
- ⚡ REST API Integration
- 🔄 React Context API for User State
- 📱 Responsive UI

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
- MongoDB
- Mongoose

### Authentication & Storage
- JWT
- HTTP-only Cookies
- bcryptjs
- Multer
- Cloudinary

## 🔄 Application Flow

```
React Frontend
      ↓
Axios Request
      ↓
Express REST API
      ↓
Authentication Middleware
      ↓
MongoDB / Mongoose
      ↓
Cloudinary
      ↓
Response
      ↓
React State
```

## 🧠 What I Practiced

Built the complete authentication flow from **React → REST API → Express → MongoDB**, including:

- User registration and login
- Password hashing
- JWT token generation
- HTTP-only cookie authentication
- Protected API routes
- Authentication middleware
- User state management with Context API
- Profile image uploads using Multer
- Cloudinary image storage
- Frontend/backend integration
- Error handling and API debugging

## 📂 Project Structure

```
client/
  ├── components/
  ├── pages/
  ├── context/
  └── assets/

server/
  ├── config/
  ├── controllers/
  ├── middlewares/
  ├── models/
  ├── routes/
  └── server.js
```

## ⚙️ Environment Variables

Create a `.env` file in the backend directory:

```env
MONGODB_URL=
JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## 🚀 Getting Started

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

### Install Frontend Dependencies

```bash
cd client
npm install
npm run dev
```

### Install Backend Dependencies

```bash
cd server
npm install
npm run dev
```

## 🎯 Purpose

This project was built to strengthen my understanding of **full-stack authentication and MERN application architecture** through hands-on implementation.

It represents my transition from building frontend interfaces to developing complete applications with **React, REST APIs, authentication, databases, middleware, and cloud services**.