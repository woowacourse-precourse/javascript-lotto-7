export const trimWinningNumbers = (winningNumbers) => {
  const trimWinningNum = winningNumbers.split(',').map(Number);
  return trimWinningNum;
};
