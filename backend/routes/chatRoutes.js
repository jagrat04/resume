// backend/routes/chatRoutes.js
import express from 'express';
const router = express.Router();

// Mock storage for chat messages (use a database in production)
const messages = [];

// Get all messages
router.get('/', (req, res) => {
  res.json(messages);
});

// Add a new message
router.post('/', (req, res) => {
  const { username, message } = req.body;
  if (!username || !message) {
    return res.status(400).json({ error: 'Username and message are required.' });
  }

  const newMessage = { id: messages.length + 1, username, message, timestamp: new Date() };
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

export default router;
