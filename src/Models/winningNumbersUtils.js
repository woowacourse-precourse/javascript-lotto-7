const trimWinningNumbers = (winningNum) => {
  const trimWinningNum = winningNum.split(',').map((x) => x.trim());
  
  return trimWinningNum;
};

export { trimWinningNumbers };
