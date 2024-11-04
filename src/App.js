import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Vaild from "./Valid.js";
import Calculate from "./calculate.js";

class App {
  async run() {
    const amountValidtor = new Vaild();

    // 로또 구입 금액을 입력받는 함수
    async function getLottoPurchaseAmount() {
      while (true) {
        try {
          const purchaseAmount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
          amountValidtor.validate(parseInt(purchaseAmount, 10));
          return purchaseAmount;
        } catch (error) {
          MissionUtils.Console.print(error.message);
        }
      }
    }
    //로또 번호 생성 함수
    function generateLottoNumbers(count) {
      const lottoNumbers = [];
      for (let i = 0; i < count; i++) {
        const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
        lottoNumbers.push(numbers);
      }
      return lottoNumbers;
    }



    // 당첨 번호를 입력받는 함수
    async function getLottoWinningNumbers() {
      while (true) {
        try {
          const winningNumbers = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해주세요');
          const numbers = winningNumbers.split(', ').map(Number);
          new Lotto(numbers); // 유효성 검사
          return numbers;
        } catch (error) {
          MissionUtils.Console.print(error.message);
        }
      }
    }

    // 보너스 번호 입력받는 함수
    async function getBonusNumber() {
      while (true) {
        try {
          const bonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.');
        } catch (error) {
          MissionUtils.Console.print(error.message);
        }
      }
    }

    const purchaseAmount = await getLottoPurchaseAmount();
  }
}

export default App;