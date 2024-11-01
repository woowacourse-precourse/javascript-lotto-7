import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { ERROR_MESSAGE, INPUT_MESSAGE } from "./constants/message.js";

const NUMBER_REGEX = /^[0-9]*$/;
class App {
  async run() {
    try {
      // purchase input
      const purchaseAmount = await Console.readLineAsync(
        INPUT_MESSAGE.PURCHASE_AMOUNT
      );

      // purchase validate
      // 1. 숫자가 아닌 경우
      if (!NUMBER_REGEX.test(purchaseAmount)) {
        throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_INPUT.NOT_A_NUMBER);
      }

      // 2. 1000 단위로 나누어 떨어지지 않는 경우
      if (Number(purchaseAmount) % 1000 !== 0) {
        throw new Error(
          ERROR_MESSAGE.PURCHASE_AMOUNT_INPUT.NOT_DIVISION_BY_THOUSAND
        );
      }

      const lottoCount = Number(purchaseAmount) / 1000;

      Console.print(`${lottoCount}개를 구매했습니다.`);

      const myLotto = Array.from({ length: lottoCount }, () => {
        const myLottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
          (a, b) => a - b
        );

        Console.print(`[${myLottoNumber.join(", ")}]`);

        return new Lotto(myLottoNumber);
      });

      // lotto number input
      const lottoNumber = await Console.readLineAsync(
        INPUT_MESSAGE.LOTTO_NUMBER
      );

      const lottoArray = new Set(lottoNumber.split(",").map(Number));

      // lotto validate
      // 1. 번호가 6개가 되지 않는 경우
      if (lottoArray.size != 6) {
        throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_INPUT.NOT_SIX_NUMBERS);
      }

      // 2. 로또 번호에 문자가 있는 경우
      const hasNaN = [...lottoArray].some(
        (lottoNumber) => !Number.isInteger(lottoNumber)
      );

      if (hasNaN) {
        throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_INPUT.NOT_A_NUMBER);
      }

      // 3. 로또 번호가 1 ~ 45 사이가 아닌 경우
      const hasOutOfRange = [...lottoArray].some(
        (lottoNumber) => !(lottoNumber >= 1 && lottoNumber <= 45)
      );

      if (hasOutOfRange) {
        throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_INPUT.OUT_OF_RANGE_1_to_45);
      }

      // bonus number input
      const bonusNumber = await Console.readLineAsync(
        INPUT_MESSAGE.BONUS_NUMBER
      );

      // 1. 숫자가 아닌 문자가 입력된 경우
      if (!NUMBER_REGEX.test(bonusNumber)) {
        throw new Error(ERROR_MESSAGE.BONUS_NUMBER_INPUT.NOT_A_NUMBER);
      }

      // 2. 1 - 45 범위 밖의 숫자가 입력된 경우
      const bonusNumberOutOfRange =
        Number(bonusNumber) > 45 || Number(bonusNumber) < 1;

      if (bonusNumberOutOfRange) {
        throw new Error(ERROR_MESSAGE.BONUS_NUMBER_INPUT.OUT_OF_RANGE_1_to_45);
      }

      // 3. 기존 로또 번호와 중복되는 경우
      if (lottoArray.has(Number(bonusNumber))) {
        throw new Error(ERROR_MESSAGE.BONUS_NUMBER_INPUT.DUPLICATED_NUMBER);
      }
    } catch (error) {
      console.log(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
