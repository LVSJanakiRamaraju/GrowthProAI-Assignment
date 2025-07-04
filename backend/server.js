const express = require('express');
const cors = require('cors');
const generateHeadline  = require('./generateHeadline');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const allowedOrigins = [
    `${process.env.FRONTEND_URL}`,
  'http://localhost:5173',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));


const PORT = 5000;

app.post('/business-data', (req, res) => {
    const { name, location } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Business Name is required' });
    }
    if (!location) {
        return res.status(400).json({ error:'Business location is required' });
    }

  const data = {
    rating: (Math.random() * 4 + 1).toFixed(1),
    reviews: Math.floor(Math.random() * 500),
    headline: generateHeadline(name, location)
  };

  res.json(data);
});

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;

    if(!name) {
        console.log("error");
        return res.status(400).json({ error: 'Business Name is required' });
    }
    if(!location) {
        return res.status(400).json({ error: 'Business location is required' });
    }

  const headline = generateHeadline(name, location);
  res.json({ headline });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
