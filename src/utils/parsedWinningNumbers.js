import { COMMA } from '../constants/config';

const parseWinningNumbers = (
  winningNumbers,
) => winningNumbers.split(COMMA).map((winningNumber) => parseInt(winningNumber.trim(), 10));

export default parseWinningNumbers;
