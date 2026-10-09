# Personal Portfolio — Rithish R.

A dark, responsive full-stack developer portfolio built with React + Vite, Node.js + Express, and MongoDB.

## Features
- Responsive dark UI with purple/blue accents
- About, skills, projects, experience, certificates, and contact sections
- Project cards loaded from the Express API (with local sample data as a fallback)
- MongoDB project model and seed endpoint
- Contact form API with basic validation
- Beginner-friendly setup and deployment notes

## Requirements
Install **Node.js LTS** and use **VS Code**. For the database, use either a local MongoDB installation or a free MongoDB Atlas cluster.

## 1. Configure the backend
Open a terminal in VS Code:

```bash
cd backend
npm install
```

Copy `.env.example` to `.env` and fill in `MONGODB_URI`. For MongoDB Atlas, use your cluster connection string and replace `<password>` with your database user's password. Keep `.env` private; never upload it to GitHub.

Example `.env`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://YOUR_USER:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/portfolio?retryWrites=true&w=majority
CLIENT_URL=http://localhost:5173
```

Start the API:

```bash
npm run dev
```

Expected message: `API server running on http://localhost:5000`. If MongoDB is not configured or reachable, the API still starts but project data is served from the frontend's sample list.

## 2. Start the frontend
Open a **second terminal** in VS Code:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL Vite prints, normally `http://localhost:5173`.

## 3. Connect MongoDB and seed projects
1. Start the backend with a valid `MONGODB_URI`.
2. In a browser, open `http://localhost:5000/api/health` and check that the API responds.
3. Send a POST request to `http://localhost:5000/api/projects/seed` to insert the three example projects. You can use the VS Code REST Client extension, Postman, or run this in PowerShell:

```powershell
Invoke-RestMethod -Method Post -Uri http://localhost:5000/api/projects/seed
```

The seed endpoint only inserts the sample projects if the collection is empty. For a public production deployment, protect or remove this endpoint.

## Personalize your portfolio
- Edit the name, intro, education, skills, and social links in `frontend/src/App.jsx`.
- Update the GitHub URLs and demo URLs in the sample project objects in `frontend/src/data.js` and in `backend/models/Project.js`.
- Replace the example email in the Contact section with an email address you want to publish.
- Add your real certificate images/links before publishing.

## API endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | API/database status |
| GET | `/api/projects` | Get portfolio projects |
| POST | `/api/projects/seed` | Seed example projects into an empty database |
| POST | `/api/contact` | Validate and receive a contact message |

Contact messages are currently logged by the API and are **not saved to a database or emailed**. Before production, connect an email provider or create a ContactMessage model, add rate limiting, and add spam protection.

## Deployment overview
- **Frontend:** deploy `frontend` to Vercel or Netlify; set `VITE_API_URL` to your deployed backend URL (without a trailing slash).
- **Backend:** deploy `backend` to Render or another Node.js host; set `MONGODB_URI`, `CLIENT_URL` (your deployed frontend URL), and `NODE_ENV=production`.
- **Database:** use MongoDB Atlas and allow network access only as appropriate for your deployment.
- Update CORS settings and test `/api/health` and `/api/projects` after deployment.

This is a starter project, not a hardened production service. Do not commit credentials or private contact information.
