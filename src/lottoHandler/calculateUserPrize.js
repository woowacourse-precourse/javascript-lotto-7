export default function calculateUserPrize(matchedNumbers) {
  let matchedHash = new Map();
  matchedNumbers = matchedNumbers.filter((matchedCount) => matchedCount >= 3);
  matchedNumbers.map((matchedCount) => {
    const matchedKey = matchedCount.toString();
    matchedHash.set(matchedKey, (matchedHash.get(matchedKey) || 0) + 1);
  });

  return Object.fromEntries(matchedHash);
}
