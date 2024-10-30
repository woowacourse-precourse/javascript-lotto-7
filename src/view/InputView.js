import { Console } from "@woowacourse/mission-utils";

class InputView {
  async getLottoPrice() {
    const lottoPrice = await Console.readLineAsync(
      "구입 금액을 입력해 주세요.\n"
    );
    this.isPriceValidate(lottoPrice);
  }
  isPriceValidate(lottoPrice) {
    const condition = lottoPrice % 1000 == 0;
    if (!condition) {
      throw new Error(
        "[ERROR] 로또 구입 금액은 1000원 단위로만 입력 가능합니다."
      );
    }
  }
}

export default InputView;
