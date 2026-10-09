import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import projectsRouter from './routes/projects.js';

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:5173').split(',').map((origin) => origin.trim());

app.use(cors({ origin: (origin, callback) => {
  if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
  return callback(new Error('Origin not allowed by CORS'));
} }));
app.use(express.json({ limit: '20kb' }));

app.get('/api/health', (_req, res) => res.json({ status: 'ok', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' }));
app.use('/api/projects', projectsRouter);

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 80) return res.status(400).json({ message: 'Please enter a name between 2 and 80 characters.' });
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) return res.status(400).json({ message: 'Please enter a valid email address.' });
  if (typeof message !== 'string' || message.trim().length < 10 || message.length > 2000) return res.status(400).json({ message: 'Message must be between 10 and 2000 characters.' });
  // Demo behavior: do not persist personal data. Connect an email provider or a database model before production.
  console.log(`Contact form received from ${name.trim()} <${email.trim()}>: ${message.trim().slice(0, 500)}`);
  return res.status(202).json({ message: 'Message received by the demo API.' });
});

app.use((err, _req, res, _next) => {
  console.error(err.message);
  if (err.message === 'Origin not allowed by CORS') return res.status(403).json({ message: 'This website origin is not allowed.' });
  return res.status(500).json({ message: 'An unexpected server error occurred.' });
});

app.listen(PORT, () => console.log(`API server running on http://localhost:${PORT}`));

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected.'))
    .catch((error) => console.error('MongoDB connection failed:', error.message));
} else {
  console.warn('MONGODB_URI is missing. API starts, but database-backed projects are unavailable.');
}
