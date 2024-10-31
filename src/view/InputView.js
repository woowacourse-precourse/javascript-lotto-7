import { Console } from "@woowacourse/mission-utils";
import Validator from "../util/Validator.js";

class InputView {
  constructor() {
    this.validator = new Validator();
  }
  async getLottoPrice() {
    const lottoPrice = await Console.readLineAsync(
      "구입 금액을 입력해 주세요.\n"
    );
    this.validator.isPriceNumber(lottoPrice);
    this.validator.isPricePositive(lottoPrice);
    this.validator.isPriceDivisible(lottoPrice);
    return lottoPrice;
  }
  async getLottoAnswer() {
    const answerInput = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const lottoAnswer = answerInput.split(",");
    return lottoAnswer;
  }
  async getBonusAnswer() {
    const bonusInput = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    this.validator.isBonusAsNumber(bonusInput);
    this.validator.isBonusInRange(bonusInput);
    return bonusInput;
  }
}

export default InputView;
