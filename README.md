# 🌐 Personal Portfolio Website

A modern, responsive, full-stack personal portfolio website developed to showcase my skills, projects, education, and professional experience as a **Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning (CSE - AIML)**.

The portfolio features a dark modern UI, interactive project cards, and a backend API connected to MongoDB for storing and managing project information.

## 🚀 Features

* **Modern UI:** Dark theme with attractive gradient accents and responsive layouts.
* **About Me:** Introduction, educational background, and career interests.
* **Skills Showcase:** Display of programming languages, frameworks, and technical skills.
* **Projects Section:** Highlights AI/ML projects with descriptions, technologies, and links.
* **Experience & Certificates:** Sections for internships, certifications, and achievements.
* **Contact Form:** Allows visitors to submit messages through the backend API.
* **REST API:** Express.js endpoints for retrieving and managing project data.
* **MongoDB Integration:** Stores project information in a database.
* **Responsive Design:** Works across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* REST API

### Database

* MongoDB
* Mongoose

### Tools

* Visual Studio Code
* Git and GitHub
* npm

## 💻 Featured Projects

### 1. Disease Prediction System

An AI/ML-based application that predicts the likelihood of certain diseases using health-related input features.

**Technologies:** Python, Scikit-learn, Pandas, NumPy, Streamlit

### 2. Credit Scoring Model

A machine learning project that classifies credit risk into categories such as good or bad based on financial and profile-related features.

**Technologies:** Python, Pandas, Scikit-learn, Random Forest, Streamlit

### 3. Handwriting Recognition

A project focused on recognizing handwritten characters or text from uploaded images using image processing and machine learning techniques.

**Technologies:** Python, OpenCV, TensorFlow/Keras

## 📁 Project Structure

```text
personal-portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── data.js
│   │   └── index.css
│   ├── package.json
│   └── .env.example
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm (included with Node.js)
* A MongoDB database, either local or through [MongoDB Atlas](https://www.mongodb.com/atlas)
* Visual Studio Code (recommended)

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd personal-portfolio
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository URL.

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file using `.env.example` as a reference and configure the required environment variables, including your MongoDB connection string.

Start the backend:

```bash
npm run dev
```

### 3. Set Up the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed in your terminal to view the website.

## 🔐 Environment Variables

Configure the environment variables specified in the backend and frontend `.env.example` files.

## 🌍 Deployment

The application can be deployed using the following services:

* Frontend: Vercel or Netlify
* Backend: Render or another Node.js-compatible hosting service
* Database: MongoDB Atlas

Configure the production API URL and environment variables before deployment.

## 🎯 Project Objective

The main objective of this project is to build a professional online presence while applying full-stack web development concepts, including responsive UI design, REST API development, database integration, and deployment.

It also demonstrates my ability to combine software development with my interests in Artificial Intelligence and Machine Learning.

## 🔮 Future Enhancements

* Admin dashboard for managing projects dynamically.
* Email notifications for contact form submissions.
* Improved form validation and spam protection.
* Dark/light theme toggle.
* Blog section for sharing technical articles.
* Analytics dashboard to monitor portfolio visits.

Computer Science Engineering — Artificial Intelligence and Machine Learning
---

⭐ If you find this project interesting, consider giving the repository a star!

*Built with curiosity, creativity, and a passion for technology.*
