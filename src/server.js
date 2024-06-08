import { loadCorpus, loadDictionaryFromFile } from './dictionary/dictionaryService.js';
import express from 'express';
import cors from 'cors';
const app = express();
const DATA = 'data';

app.use(express.static('public'));
const PORT = process.env.PORT || 8888;

app.use(cors()); // Enable CORS for all routes

const dictionary = loadDictionaryFromFile(DATA + '/english_words__practicalcryptography.txt', true);
const names_last = loadDictionaryFromFile(DATA + '/dist.all.last.txt', true);
const names_first_male = loadDictionaryFromFile(DATA + '/dist.male.first.txt', true);
const names_first_female = loadDictionaryFromFile(DATA + '/dist.female.first.txt', true);
const ten_million_names = loadDictionaryFromFile(DATA + '/ten_million_names.txt', false);

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world! ' + dictionary?.length + " " + names_last?.length + " " + names_first_male?.length + " " + names_first_female?.length + " " + ten_million_names?.length});
});

// get all dictionary words
app.get('/api/words', (req, res) => {
  res.json(dictionary);
});

// get all last names
app.get('/api/names_last', (req, res) => {
  res.json(names_last);
});

// get all male first names
app.get('/api/names_first_male', (req, res) => {
  res.json(names_first_male);
});

// get all female first names
app.get('/api/names_first_female', (req, res) => {
  res.json(names_first_female);
});

app.get('/api/ten_million_names', (req, res) => {
  res.json(ten_million_names);
});

// retrieve a specific corpus 
app.get('/api/corpus', (req, res) => {
    // Extract query parameters
    const { name } = req.query;

    // Process the query parameters (example: simply returning them)
    if (!name) {
        return res.status(400).send({ error: 'Name required' });
    }
    let corpus = loadCorpus(DATA, name);
    res.send({
      corpus
    });  
});

app.get('/api/suspects', (req, res) => {
  let suspects = loadDictionaryFromFile(DATA + '/suspects.txt', false);
  res.json(suspects);  
});

app.get('/api/zodiac_words', (req, res) => {
  let z = loadDictionaryFromFile(DATA + '/zodiac-words.txt', false);
  res.json(z);  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

