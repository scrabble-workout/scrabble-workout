const getKey = word => word.split('').sort().join('');

const prepareWords = (rawText) => {
  return Object.values(rawText
    .split('\n')
    .map(val => val.trim())
    .filter(Boolean)
    .reduce(
      (acc, word) => {
        const key = getKey(word);
        return {
          ...acc,
          [key]: new Set([...(acc[key] || []), word]),
        };
      },
      {},
    ))
    .map(words => [...words].sort())
    .sort();
};

module.exports = { prepareWords };
