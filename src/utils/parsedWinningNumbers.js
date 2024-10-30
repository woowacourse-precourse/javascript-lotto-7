const parseWinningNumbers = (
  winningNumbers,
) => winningNumbers.split(',').map((winningNumber) => parseInt(winningNumber.trim(), 10));

export default parseWinningNumbers;
