export const calculateWinningDetails = function (matchingNumber) {
  const winningCounts = new Array(5).fill(0);

  matchingNumber.forEach((match) => {
    switch (match.length) {
      case 3:
        winningCounts[0] += 1;
        break;
      case 4:
        winningCounts[1] += 1;
        break;
      case 5:
        winningCounts[2] += 1;
        break;
      case 6:
        winningCounts[4] += 1;
        break;
      default:
        break;
    }
  });

  return winningCounts;
};
