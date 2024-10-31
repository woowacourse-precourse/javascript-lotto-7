import { Console } from "@woowacourse/mission-utils";

class InputView {
  async getLottoPrice() {
    const lottoPrice = await Console.readLineAsync(
      "구입 금액을 입력해 주세요.\n"
    );
    this.isPriceValidate(lottoPrice);
    this.isPriceDivisible(lottoPrice);
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
    this.isBonusAsNumber(bonusInput);
    this.isBonusInRange(bonusInput);
    return bonusInput;
  }
  isPriceValidate(lottoPrice) {
    const isNumber = !Number.isNaN(Number(lottoPrice, 10));
    const isPositive = lottoPrice > 0;
    if (!isNumber) {
      throw new Error("[ERROR] 로또 구입 금액은 숫자만 입력할 수 있습니다.");
    }
    if (!isPositive) {
      throw new Error("[ERROR] 로또 구입 금액은 양수로 입력해 주세요.");
    }
  }
  isPriceDivisible(lottoPrice) {
    const isDivisible = lottoPrice % 1000 == 0;
    if (!isDivisible) {
      throw new Error(
        "[ERROR] 로또 구입 금액은 1000원 단위로만 입력 가능합니다."
      );
    }
  }
  isBonusAsNumber(bonusInput) {
    const isNumber = !Number.isNaN(Number(bonusInput, 10));
    if (!isNumber) {
      throw new Error(
        "[ERROR] 보너스 번호는 한 개의 숫자만 입력할 수 있습니다."
      );
    }
  }
  isBonusInRange(bonusInput) {
    const bonusInputNumber = Number(bonusInput);
    const condition = bonusInputNumber >= 1 || bonusInputNumber <= 45;
    if (!condition) {
      throw new Error("[ERROR] 보너스 번호는 1~45 사이 숫자만 가능합니다.");
    }
  }
}

export default InputView;
