import { Console } from "@woowacourse/mission-utils";

class InputView {
  async getLottoPrice() {
    const lottoPrice = await Console.readLineAsync(
      "구입 금액을 입력해 주세요.\n"
    );
    this.isPriceValidate(lottoPrice);
    return lottoPrice;
  }
  isPriceValidate(lottoPrice) {
    const isNumber = !Number.isNaN(Number(lottoPrice, 10));
    const isDivisible = lottoPrice % 1000 == 0;
    if (!isNumber) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }
    if (!isDivisible) {
      throw new Error(
        "[ERROR] 로또 구입 금액은 1000원 단위로만 입력 가능합니다."
      );
    }
  }
}

export default InputView;
