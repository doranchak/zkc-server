import fs from 'fs';

export function loadDictionaryFromFile(filename) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(filename, 'utf8');
        // Split the file content into lines
        const lines = data.split('\n');
        // Initialize an empty dictionary object
        const dictionary = [];
        
        // Iterate through each line
        lines.forEach(line => {
            // Split the line into word and frequency
            const [word, frequency] = line.trim().split(' ');
            // Add the word and frequency to the dictionary
            if (word && frequency) {
                dictionary.push([word, frequency]);
            }
        });
        console.log(dictionary);
        return dictionary;
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
}

// // Example usage:
// const filename = 'dictionary.txt';
// const dictionary = loadDictionaryFromFile(filename);
// console.log(dictionary);


// export async function loadDictionary(file) {
//     const response = await fetch(file);
//     const text = await response.text();
    
//     const dictionary = {};
//     const lines = text.split('\n');
    
//     lines.forEach(line => {
//       const [word, frequency] = line.trim().split(' ');
//       if (word && frequency) {
//         dictionary[word] = parseInt(frequency);
//       }
//     });
  
//     return dictionary;
//   }
  