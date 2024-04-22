// app.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Import routes and models
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const { User, Post } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection URL
const mongoUrl = 'mongodb://localhost:27017/social_media_platform';

// Connect to MongoDB
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Serve front-end files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/feed', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'feed.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

app.get('/create-post', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'create-post.html'));
});

app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'search.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});