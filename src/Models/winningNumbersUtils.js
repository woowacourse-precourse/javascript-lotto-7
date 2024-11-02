const trimWinningNumbers = (winningNum) => {
  const trimWinningNum = winningNum.split(',').map(Number);
  return trimWinningNum;
};

export { trimWinningNumbers };
