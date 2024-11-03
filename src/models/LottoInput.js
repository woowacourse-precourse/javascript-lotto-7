import { Console } from '@woowacourse/mission-utils';

import { validateWinningNumbers } from '../utils/validation.js';

class LottoInput {
  constructor() {
    this.winningNumbers = [];
  }

  async getWinningNumbers() {
    const LOTTO_NUMBERS = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요 (쉼표로 구분).\n',
    );
    this.winningNumbers = this.processInput(LOTTO_NUMBERS, true);
    return this.winningNumbers;
  }

  processInput(input, isWinningNumbers = true) {
    if (isWinningNumbers) {
      validateWinningNumbers(input.trim());
    }

    return input;
  }
}

export default LottoInput;
