const fs = require('fs');
const { prepareWords } = require('../../src/scripts/prepare-words');

fs.readFile(`${__dirname}/raw-words.txt`, 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    const words = prepareWords(data);
    const targetFile = './public/words.json';
    fs.writeFile(targetFile, JSON.stringify(words), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log(`${words.length} word sets saved to ${targetFile}.`);
    });
});
