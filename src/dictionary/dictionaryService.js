import fs from 'fs';

export function loadDictionaryFromFile(filename, hasFrequency) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(filename, 'utf8');
        // Split the file content into lines
        const lines = data.split('\n');
        // Initialize an empty dictionary object
        const dictionary = [];
        
        // Iterate through each line
        lines.forEach(line => {
            if (hasFrequency) {
                // Split the line into word and frequency
                const [word, frequency] = line.trim().split(' ');
                // Add the word and frequency to the dictionary
                if (word && frequency) {
                    dictionary.push([word, frequency]);
                }
            } else dictionary.push([line.trim().replace(/\s+/g, ''), 0]);
        });
        console.log("Loaded " + dictionary.length + " entries from " + filename);
        return dictionary;
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
}

export function loadCorpus(dataFolder, corpusName) {
    try {
        corpusName = corpusName.toLowerCase();
        return fs.readFileSync(dataFolder + "/corpus-" + corpusName + ".txt", 'utf8');
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
}
