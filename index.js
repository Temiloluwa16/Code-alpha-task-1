import dotenv from 'dotenv';
import express, { urlencoded } from 'express';
import mongoose, { connect } from 'mongoose';
import ShortUrl from './models/shortUrl.js';

const app = express();
dotenv.config();

const mongoUri = process.env.MONGODB_URI;
mongoose.set('debug', true);
// Connect to MongoDB
mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
// Middleware
app.use(urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Routes
app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render('index', { shortUrls });
});

app.post('/shortUrls', async (req, res) => {
  const { fullUrl } = req.body;
  if (!fullUrl) {
    return res.status(400).send('Full URL is required.');
  }
  await ShortUrl.create({ full: fullUrl });
  res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (!shortUrl) return res.status(404).send('URL not found.');
  shortUrl.clicks++;
  await shortUrl.save();
  res.redirect(shortUrl.full);
});

// Start Server
app.listen(5000, () => console.log('Server started on http://localhost:5000'));
