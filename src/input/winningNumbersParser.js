export default function winningNumbersParser(winningNumbers) {
  return winningNumbers.trim().split(',').map(Number);
}