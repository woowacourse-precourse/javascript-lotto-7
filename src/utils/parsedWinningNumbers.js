import { COMMA } from '../constants/config.js';

export default function parseWinningNumbers(winningNumbers) {
  return winningNumbers.split(COMMA).map((winningNumber) => parseInt(winningNumber.trim(), 10));
}
