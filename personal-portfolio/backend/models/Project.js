import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: { type: String, default: 'Development' },
  description: { type: String, required: true, trim: true },
  technologies: [{ type: String, trim: true }],
  githubUrl: { type: String, default: '' },
  demoUrl: { type: String, default: '' },
  accent: { type: String, default: 'violet' },
  icon: { type: String, default: 'activity' },
  featured: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
