import { MissionUtils } from "@woowacourse/mission-utils";

const NUMBER_REGEX = /^[0-9]*$/;
class App {
  async run() {
    try {
      // purchase input
      const purchaseAmount = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );

      // purchase validate
      // 1. 숫자가 아닌 경우
      if (!NUMBER_REGEX.test(purchaseAmount)) {
        throw new Error("숫자가 아닌 문자가 입력되었습니다.");
      }
      // 2. 1000 단위로 나누어 떨어지지 않는 경우
      if (Number(purchaseAmount) % 1000 !== 0) {
        throw new Error("1000원 단위로 나누어 떨어지지 않습니다.");
      }

      // lotto number input
      const lottoNumber = await MissionUtils.Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n"
      );

      const lottoArray = new Set(lottoNumber.split(",").map(Number));
      // lotto validate
      // 1. 번호가 6개가 되지 않는 경우
      if (lottoArray.size != 6) {
        throw new Error("로또 번호가 6개가 아닙니다.");
      }

      // 2. 로또 번호에 문자가 있는 경우
      const hasNaN = [...lottoArray].some(
        (lottoNumber) => !Number.isInteger(lottoNumber)
      );

      if (hasNaN) {
        throw new Error("숫자가 아닌 문자가 입력되었습니다.");
      }

      // 3. 로또 번호가 1 ~ 45 사이가 아닌 경우
      const hasOutOfRange = [...lottoArray].some(
        (lottoNumber) => !(lottoNumber >= 1 && lottoNumber <= 45)
      );

      if (hasOutOfRange) {
        throw new Error("1 - 45 범위 밖의 숫자가 입력되었습니다.");
      }

      // bonus number input
      const bonusNumber = await MissionUtils.Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n"
      );

      // 1. 숫자가 아닌 문자가 입력된 경우
      if (!NUMBER_REGEX.test(bonusNumber)) {
        throw new Error("숫자가 아닌 문자가 입력되었습니다.");
      }

      // 2. 1 - 45 범위 밖의 숫자가 입력된 경우
      const bonusNumberOutOfRange =
        Number(bonusNumber) > 45 || Number(bonusNumber) < 1;

      if (bonusNumberOutOfRange) {
        throw new Error("1 - 45 범위 밖의 숫자가 입력되었습니다.");
      }

      // 3. 기존 로또 번호와 중복되는 경우
      if (lottoArray.has(Number(bonusNumber))) {
        throw new Error("기존 번호와 중복됩니다.");
      }
    } catch (error) {
      console.log(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
