import { validateNumber } from '../validators/InputValidator.js';

import { COMMA, RADIX_TEN } from '../constants/config.js';

export default function parseWinningNumbers(winningNumbers) {
  return winningNumbers.split(COMMA).map((winningNumber) => {
    validateNumber(winningNumber);
    return parseInt(winningNumber.trim(), RADIX_TEN);
  });
}
