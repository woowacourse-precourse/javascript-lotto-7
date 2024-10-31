import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";
import { LOTTO_AMOUNT_UNIT,LOTTO_NUM_RANGE,NUMBER_OF_BALLS } from './constant/constant.js'

class App {
  async run(){

    let lottoAmount;

    while (true) {
      try {
        lottoAmount = await this.promptLottoAmount();
        break
      } catch (error) {
        Console.print(error.message);
      }
    }

  }

  async promptLottoAmount() {
    const lottoAmount = Number(await Console.readLineAsync('구입금액을 입력해 주세요.\n'));
    const validator = new LottoAmountValidator();
    validator.validateMinAmount(lottoAmount);
    validator.validateUnitAmount(lottoAmount);
    return lottoAmount;
  }

}

class LottoAmountValidator {
  validateMinAmount(amount) {
    if (amount < LOTTO_AMOUNT_UNIT) {
      throw new Error('\n[ERROR] 1,000원부터 입력할 수 있습니다.');
    }
  }
  validateUnitAmount(amount) {
    if (!Number.isInteger(amount / LOTTO_AMOUNT_UNIT)) {
      throw new Error('\n[ERROR] 1,000원 단위만 입력할 수 있습니다.');
    }
  }
}

export default App;
