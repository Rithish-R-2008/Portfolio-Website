import { Router } from 'express';
import Project from '../models/Project.js';

const router = Router();
const seedProjects = [
  { title: 'Disease Prediction', category: 'AI / Machine Learning', description: 'A machine-learning app that estimates disease risk from selected health indicators and presents results in a simple dashboard.', technologies: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'], githubUrl: 'https://github.com/Rithish-R-2008', demoUrl: '', accent: 'violet', icon: 'activity' },
  { title: 'Credit Scoring Model', category: 'Predictive Analytics', description: 'A credit-risk classification project using financial and payment-history features to predict good or bad credit risk.', technologies: ['Python', 'Random Forest', 'Pandas', 'Streamlit'], githubUrl: 'https://github.com/Rithish-R-2008', demoUrl: '', accent: 'blue', icon: 'chart' },
  { title: 'Handwriting Recognition', category: 'Computer Vision', description: 'A handwriting recognition concept focused on image preprocessing and converting handwritten input into digital text.', technologies: ['Python', 'OpenCV', 'TensorFlow / Keras', 'NumPy'], githubUrl: 'https://github.com/Rithish-R-2008', demoUrl: '', accent: 'pink', icon: 'scan' }
];

router.get('/', async (_req, res, next) => {
  try {
    if (mongooseReady()) return res.json(await Project.find({ featured: true }).sort({ createdAt: -1 }).lean());
    return res.json([]);
  } catch (error) { next(error); }
});

function mongooseReady() { return Project.db.readyState === 1; }

// For local development only. Protect or remove this endpoint before public production deployment.
router.post('/seed', async (_req, res, next) => {
  try {
    if (!mongooseReady()) return res.status(503).json({ message: 'MongoDB is not connected. Check MONGODB_URI.' });
    const count = await Project.countDocuments();
    if (count > 0) return res.status(200).json({ message: 'Projects already exist; no seed data was inserted.', count });
    const inserted = await Project.insertMany(seedProjects);
    return res.status(201).json({ message: 'Example projects inserted.', count: inserted.length });
  } catch (error) { next(error); }
});

import mongoose from 'mongoose';
export default router;
