# 📝 MERN Blog Application

A full-stack blog platform built with the MERN stack (MongoDB, Express.js, React, Node.js) where users can create, read, update, and delete blog posts. It features a modern UI and API-based architecture.

---

## 🚀 Project Overview

This is a CRUD blog app developed using the MERN stack. Users can:

- View a list of all blog posts
- Create a new blog post
- View details of a single post
- Edit existing blog posts
- Delete blog posts

---

## 🧰 Tech Stack

**Frontend:**
- React + TypeScript
- React Router
- Axios
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS + dotenv

---

## 📦 Folder Structure

root/
├── client/ # React Frontend
│ ├── src/
│ │ ├── pages/ # Page components (Home, CreatePost, EditPost, PostDetails)
│ │ ├── components/ # Shared components (Navbar, PostCard)
│ ├── public/
│ │ └── screenshots/ # Screenshots for README
│ └── .env.example # Frontend environment variables
├── server/ # Express Backend
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes
│ └── .env.example # Backend environment variables
└── README.md

yaml
Copy
Edit

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd week-4-mern-integration-assignment-Patty05307
2. Setup Backend (server)
bash
Copy
Edit
cd server
npm install
cp .env.example .env
# Edit .env and add your MONGO_URI
npm run dev
Make sure MongoDB is running and your .env looks like:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
3. Setup Frontend (client)
bash
Copy
Edit
cd ../client
npm install
cp .env.example .env
# Edit .env and add your VITE_API_BASE_URL
npm run dev
Example .env:

bash
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000/api
📡 API Documentation
Base URL
bash
Copy
Edit
http://localhost:5000/api/posts
Endpoints
Method	Endpoint	Description
GET	/posts	Get all blog posts
GET	/posts/:id	Get a single post by ID
POST	/posts	Create a new post
PUT	/posts/:id	Update a post by ID
DELETE	/posts/:id	Delete a post by ID

✨ Features Implemented
 Modern React UI with Tailwind

 Create Post Page

 List all posts on the homepage

 View individual post details

 Edit and update a post

 Delete a post

 React Router navigation

 API integration using Axios

 Environment variables using .env.example

 Responsive layout

🖼️ Screenshots
Home Page

Create Post Page

Post Details Page

Edit Post Page

Place your screenshots inside: client/public/screenshots/

🧪 Testing & Deployment
You can test locally using the setup steps above. Ensure both frontend and backend are running on their respective ports.

👤 Author
Patience Ibitokun (@Patty05307)

📜 License
This project is licensed for educational purposes under your institution’s guidelines.
