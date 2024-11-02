import { validateNumber } from '../validators/InputValidator.js';

import { COMMA } from '../constants/config.js';

export default function parseWinningNumbers(winningNumbers) {
  return winningNumbers.split(COMMA).map((winningNumber) => {
    validateNumber(winningNumber);
    return parseInt(winningNumber.trim(), 10);
  });
}
