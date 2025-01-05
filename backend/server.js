import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing JSON requests

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is connected!' });
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
