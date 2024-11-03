import LottoIO from "./LottoIO.js";
import { duplicateNumbers, isNumber, isOutRangeNumber } from "./utils.js";
import { LOTTO_NUMBER_MAX, LOTTO_NUMBER_MIN } from "./constants.js";

class Bonus {
  #number;

  constructor(number, lottoNumbers) {
    Bonus.#validate(number, lottoNumbers);
    this.#number = number;
  }

  static async createForLotto(lottoNumbers) {
    while (true) {
      try {
        const bonusNumber = await this.#getBonusNumber();

        return new Bonus(Number(bonusNumber), lottoNumbers);
      } catch ({ message }) {
        LottoIO.print(message || "알 수 없는 에러");
      }
    }
  }

  get number() {
    return this.#number;
  }

  static async #getBonusNumber() {
    return await LottoIO.getUserInput("\n보너스 번호를 입력해 주세요.\n");
  }

  static #validate(bonusNumber, lottoNumbers) {
    if (!isNumber(bonusNumber)) {
      LottoIO.throwError("보너스 번호는 숫자로 입력해 주세요.");
    }

    if (isOutRangeNumber(bonusNumber, LOTTO_NUMBER_MIN, LOTTO_NUMBER_MAX)) {
      LottoIO.throwError(
        `보너스 번호는 ${LOTTO_NUMBER_MIN} ~ ${LOTTO_NUMBER_MAX} 사이로 입력해 주세요.`
      );
    }

    if (duplicateNumbers([bonusNumber, ...lottoNumbers])) {
      LottoIO.throwError(
        "보너스 번호는 이전에 입력한 당첨 번호와 중복되지 않게 입력해 주세요."
      );
    }
  }
}

export default Bonus;
