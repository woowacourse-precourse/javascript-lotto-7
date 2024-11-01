import { MissionUtils } from '@woowacourse/mission-utils';

class InputView {
  async readInput(string) {
    let inputValue = '';

    inputValue = await MissionUtils.Console.readLineAsync(string);

    return inputValue;
  }

  async readPurchaseAmount() {
    const purchaseAmountInput = await this.readInput(
      '구입금액을 입력해 주세요.'
    );

    this.validatePurchaseAmount(purchaseAmountInput);

    return Number(purchaseAmountInput);
  }

  validatePurchaseAmount(amount) {
    if (amount === '') {
      throw new Error('[ERROR] 구입 금액을 입력해야 합니다.');
    }

    const amountValue = Number(amount);

    if (Number.isNaN(amountValue)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }

    if (amountValue % 1000 !== 0) {
      throw new Error(
        '[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 합니다.'
      );
    }
  }

}

export default InputView;
