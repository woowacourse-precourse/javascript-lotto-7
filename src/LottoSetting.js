import { Console } from '@woowacourse/mission-utils';

class LottoSetting {
  #numberOfLotto;

  async #getPurchaseAmount() {
    return await Console.readLineAsync('구입 금액을 입력해주세요.\n');
  }

  async settingLotto() {
    const amount = await this.#getPurchaseAmount();
  }
}

export default LottoSetting;
