// import { loadDictionary } from './dictionary/dictionaryService.js';
import { loadDictionaryFromFile } from './dictionary/dictionaryService.js';
import express from 'express';
import cors from 'cors';
import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const express = require('express');
// const cors = require('cors'); // Import CORS middleware
const app = express();
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
const PORT = process.env.PORT || 8888;

app.use(cors()); // Enable CORS for all routes

const dictionary = loadDictionaryFromFile('english_words__practicalcryptography.txt');

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, Caesar! ' + dictionary?.length});
});

// get all dictionary words
app.get('/api/words', (req, res) => {
  res.json(dictionary);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

