// backend/routes/contactRoutes.js
import express from 'express';
const router = express.Router();

// Handle contact form submissions
router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Here, you can save the data to a database or send an email
  console.log(`New contact form submission:`, { name, email, message });

  res.status(200).json({ success: 'Your message has been received!' });
});

export default router;
